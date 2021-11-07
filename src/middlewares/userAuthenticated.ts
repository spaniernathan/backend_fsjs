import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const userAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (get(req, 'user.user.uuid')) return next();
  return res.sendStatus(StatusCodes.UNAUTHORIZED);
};

export default userAuthenticated;
