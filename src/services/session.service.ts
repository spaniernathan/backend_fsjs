import config from 'config';
import { randomUUID } from 'crypto';
import { get } from 'lodash';
import { User, Session } from '../db/models';
import { sign, decode } from '../utils/jwt.utils';

export const createSession = async (userUuid: string, userAgent: string) => Session.create({
  uuid: randomUUID(), userUuid, userAgent, valid: true,
});

export const createAccessToken = async ({
  user,
  session,
}: {
  user: Omit<User, 'password'>
  session: Session
}) => sign(
  { user: get(user, 'dataValues'), session: get(session, 'dataValues') },
  { expiresIn: config.get('accessTokenTtl') },
);

export const createRefreshToken = async (session: Session) => sign({ session: get(session, 'dataValues') }, { expiresIn: config.get('refreshTokenTtl') });

export const reIssueAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  const { decoded } = decode(refreshToken);
  if (!decoded || !get(decoded, 'uuid')) return false;

  const session = await Session.findOne({ where: { uuid: get(decoded, 'uuid') } });
  if (!session || !session?.valid) return false;

  const user = await User.findOne({ where: { uuid: session.userUuid } });
  if (!user) return false;

  const accessToken = createAccessToken({ user, session });
  return accessToken;
};

export const invalidateSession = async (sessionId: string) => {
  const session = await Session.update({ valid: false }, { where: { uuid: sessionId } });
  return session;
};
