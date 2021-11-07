import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Room } from '../db/models';

const userOwnRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const room = await Room.findOne({
    where: {
      uuid: req.params.roomId,
      ownerUuid: get(req, 'user.user.uuid'),
    },
  });
  if (!room) return res.sendStatus(StatusCodes.UNAUTHORIZED);
  return next();
};

export default userOwnRoom;
