import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { Message, Room } from 'db/models';
import { StatusCodes } from 'http-status-codes';

const userOwnMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const room = Room.findOne({
    where: {
      uuid: req.params.roomId,
    },
    include: {
      model: Message,
      as: 'messages',
      where: {
        uuid: req.params.messageUuid,
        ownerUuid: get(req, 'user.uuid'),
      },
    },
  });
  if (!room) return res.sendStatus(StatusCodes.UNAUTHORIZED);
  return next();
};

export default userOwnMessage;
