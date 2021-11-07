import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { get } from 'lodash';
import { Room, User } from '../db/models';

// Bonus
const userIsInRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const room = Room.findOne({
    where: { uuid: req.params.roomId },
    include: {
      required: true,
      model: User,
      as: 'users',
      where: {
        uuid: get(req, 'user.user.uuid'),
      },
    },
  });
  if (!room) return res.sendStatus(StatusCodes.UNAUTHORIZED);
  return next();
};

export default userIsInRoom;
