import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { omit, get } from 'lodash';
import sequelize from '../db/connect';
import logger from '../logger';
import { findUserByUuid, createUser } from '../services/user.service';

export const postUserHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await createUser({ ...req.body, uuid: randomUUID() });
    await transaction.commit();
    return res.status(StatusCodes.CREATED).json(
      omit(get(user, 'dataValues'), 'password'),
    );
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.CONFLICT);
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await findUserByUuid(get(req, 'user.user.uuid'));
    await transaction.commit();
    return res.status(StatusCodes.OK).json(
      omit(get(user, 'dataValues'), 'password'),
    );
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
