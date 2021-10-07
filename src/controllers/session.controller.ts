import config from 'config';
import { get } from 'lodash';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Session, User } from '../db/models';
import { validatePassword } from '../services/user.service';
import {
  createSession,
  createAccessToken,
  invalidateSession,
  createRefreshToken,
} from '../services/session.service';
import logger from '../logger';

export const createUserSessionHandler = async (req: Request, res: Response) => {
  let user: Omit<User, 'password'> | null = null;
  let session: Session;
  try {
    user = await validatePassword(req.body);
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).send('Invalid username or password');
  }
  try {
    session = await createSession(get(user, 'dataValues').uuid, req.get('user-agent') || '');
    logger.info('session');
    logger.info(session);
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  try {
    const accessToken = await createAccessToken({ user, session });
    const refreshToken = await createRefreshToken(session);
    return res.status(StatusCodes.CREATED).send({ accessToken, refreshToken });
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const invalidateUserSessionHandler = async (
  req: Request,
  res: Response,
) => {
  const sessionId = get(req, 'user.session');
  await invalidateSession(sessionId);
  return res.sendStatus(StatusCodes.OK);
};

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = get(req, 'user.uuid');

  const sessions = await Session.findOne({
    where: {
      user: userId,
      valid: true,
    },
  });

  return res.send(sessions);
}
