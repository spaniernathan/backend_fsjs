import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Room } from '../db/models';

const userIsInRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const room = Room.findOne({
    where: { uuid: req.params.roomId },
  });
  // TODO: Check if user is in the room
  if (!room) return res.sendStatus(StatusCodes.UNAUTHORIZED);
  return next();
};

export default userIsInRoom;
