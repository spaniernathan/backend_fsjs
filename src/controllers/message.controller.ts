import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { get } from 'lodash';
import sequelize from '../db/connect';
import logger from '../logger';
import {
  findRoomMessages,
  deleteRoomMessage,
} from '../services/message.service';

export const getRoomMessagesHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const messages = await findRoomMessages(req.params.roomUuid);
    await transaction.commit();
    return res.status(StatusCodes.OK).json(get(messages, 'dataValues'));
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteRoomMessageHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    await deleteRoomMessage(req.params.messageUuid);
    await transaction.commit();
    return res.status(StatusCodes.OK);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
