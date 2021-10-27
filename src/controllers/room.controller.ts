import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { get } from 'lodash';
import logger from '../logger';
import {
  findRoomsByUserUuid,
  deleteRoom,
  createRoom,
} from '../services/room.service';

export const createRoomHandler = async (req: Request, res: Response) => {
  try {
    const room = await createRoom({ ...req.body, uuid: randomUUID() });
    return res.status(StatusCodes.CREATED).json(get(room, 'dataValues'));
  } catch (error: any) {
    logger.error(error);
    return res.status(StatusCodes.CONFLICT).json({ message: error.message });
  }
};

export const getRoomsHandler = async (req: Request, res: Response) => {
  try {
    const room = await findRoomsByUserUuid(req.params.uuid);
    return res.status(StatusCodes.OK).json(get(room, 'dataValues'));
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const joinRoomHandler = async (req: Request, res: Response) => {
  try {
    // TODO: req.params.roomId
    return res.status(StatusCodes.OK).json({});
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteRoomHandler = async (req: Request, res: Response) => {
  try {
    await deleteRoom(req.params.roomId);
    return res.status(StatusCodes.OK);
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
