import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { get } from 'lodash';
import logger from '../logger';
import {
  findRoomMessages,
  deleteRoomMessage,
  createRoomMessage,
} from '../services/message.service';

export const createRoomMessageHandler = async (req: Request, res: Response) => {
  try {
    await createRoomMessage({
      ...req.body,
      roomUuid: req.params.roomUuid,
      uuid: randomUUID(),
    });
    return res.status(StatusCodes.CREATED);
  } catch (error: any) {
    logger.error(error);
    return res.status(StatusCodes.CONFLICT).json({ message: error.message });
  }
};

export const getRoomMessagesHandler = async (req: Request, res: Response) => {
  try {
    const messages = await findRoomMessages(req.params.roomUuid);
    return res.status(StatusCodes.OK).json(get(messages, 'dataValues'));
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteRoomMessageHandler = async (req: Request, res: Response) => {
  try {
    await deleteRoomMessage(req.params.messageUuid);
    return res.status(StatusCodes.OK);
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
