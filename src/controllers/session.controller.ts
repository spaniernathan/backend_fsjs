import { get } from 'lodash';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Session, User } from '../db/models';
import sequelize from '../db/connect';
import { validatePassword } from '../services/user.service';
import {
  createSession,
  createAccessToken,
  invalidateSession,
  createRefreshToken,
} from '../services/session.service';
import logger from '../logger';

export const createUserSessionHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  let user: Omit<User, 'password'> | null = null;
  let session: Session;
  try {
    user = await validatePassword(req.body);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  if (!user) {
    await transaction.rollback();
    return res.status(StatusCodes.UNAUTHORIZED).send('Invalid username or password');
  }
  try {
    session = await createSession(get(user, 'dataValues').uuid, req.get('user-agent') || '');
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  try {
    const accessToken = await createAccessToken({ user, session });
    const refreshToken = await createRefreshToken(session);
    await transaction.commit();
    return res.status(StatusCodes.CREATED).send({ accessToken, refreshToken });
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const invalidateUserSessionHandler = async (
  req: Request,
  res: Response,
) => {
  const transaction = await sequelize.transaction();
  try {
    await invalidateSession(get(req, 'user.session'));
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  await transaction.commit();
  return res.sendStatus(StatusCodes.OK);
};

export const getUserSessionsHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const sessions = await Session.findAll({
      where: {
        user: get(req, 'user.uuid'),
        valid: true,
      },
    });
    await transaction.commit();
    return res.send(sessions);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
