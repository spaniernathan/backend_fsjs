import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { omit, get } from 'lodash';
import { findUserByUuid, createUser } from '../services/user.service';

export const postUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser({ ...req.body, uuid: randomUUID() });
    return res.status(StatusCodes.CREATED).json(
      omit(get(user, 'dataValues'), 'password'),
    );
  } catch (e: any) {
    return res.status(StatusCodes.CONFLICT).json({ message: e.message });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  const user = await findUserByUuid(req.params.uuid);
  return res.status(StatusCodes.CREATED).json(
    omit(get(user, 'dataValues'), 'password'),
  );
};
