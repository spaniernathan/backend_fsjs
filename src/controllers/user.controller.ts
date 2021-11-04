import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { omit, get } from 'lodash';
import logger from '../logger';
import { findUserByUuid, createUser } from '../services/user.service';

export const postUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser({ ...req.body, uuid: randomUUID() });
    return res.status(StatusCodes.CREATED).json(
      omit(get(user, 'dataValues'), 'password'),
    );
  } catch (error: any) {
    logger.error(error);
    return res.status(StatusCodes.CONFLICT).json({ message: error.message });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await findUserByUuid(get(req, 'user.uuid'));
    return res.status(StatusCodes.CREATED).json(
      omit(get(user, 'dataValues'), 'password'),
    );
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
