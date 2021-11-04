import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { get } from 'lodash';
import sequelize from '../db/connect';
import logger from '../logger';
import {
  findRoomsByUserUuid,
  deleteRoom,
  createRoom,
} from '../services/room.service';

export const createRoomHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const room = await createRoom({ ...req.body, uuid: randomUUID() });
    await transaction.commit();
    return res.status(StatusCodes.CREATED).json(get(room, 'dataValues'));
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.status(StatusCodes.CONFLICT).json({ message: error.message });
  }
};

export const getRoomsHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const room = await findRoomsByUserUuid(get(req, 'user.uuid'));
    await transaction.commit();
    return res.status(StatusCodes.OK).json(get(room, 'dataValues'));
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const joinRoomHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    // TODO: req.params.roomId
    // add user to room => connect its socket to the room socket
    await transaction.commit();
    return res.status(StatusCodes.OK).json({});
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteRoomHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    await deleteRoom(req.params.roomId);
    await transaction.commit();
    return res.status(StatusCodes.OK);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
