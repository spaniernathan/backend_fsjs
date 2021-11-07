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
import { Room, UserRoom } from '../db/models';

export const createRoomHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const room = await createRoom({ ...req.body, ownerUuid: get(req, 'user.user.uuid'), uuid: randomUUID() });
    await transaction.commit();
    return res.status(StatusCodes.CREATED).json(room);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.status(StatusCodes.CONFLICT).json({ message: error.message });
  }
};

export const getRoomsHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const rooms = await findRoomsByUserUuid(get(req, 'user.user.uuid'));
    await transaction.commit();
    return res.status(StatusCodes.OK).json(rooms);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const joinRoomHandler = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    await UserRoom.create({ uuid: randomUUID(), userUuid: get(req, 'user.user.uuid'), roomUuid: req.params.roomId });
    const room = await Room.findOne({ where: { uuid: req.params.roomId } });
    await transaction.commit();
    return res.status(StatusCodes.OK).json(room);
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
    return res.sendStatus(StatusCodes.OK);
  } catch (error: any) {
    logger.error(error);
    await transaction.rollback();
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
