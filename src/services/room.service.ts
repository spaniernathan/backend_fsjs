import { randomUUID } from 'crypto';
import {
  Room, Message, UserRoom, User,
} from '../db/models';

export const createRoom = async (input: Room) => {
  await UserRoom.create({ uuid: randomUUID(), userUuid: input.ownerUuid, roomUuid: input.uuid });
  return Room.create({ ...input });
};

export const findRoomsByUserUuid = async (userUuid: string) => {
  const returnValue: any = [];
  const rooms = await Room.findAll({
    include: [{
      model: User,
      as: 'users',
      required: true,
      where: { uuid: userUuid },
    }, {
      model: Message,
      as: 'messages',
    }],
  });
  rooms.forEach((room) => {
    const {
      uuid, roomName, ownerUuid, createdAt, updatedAt, messages,
    } = room;
    returnValue.push({
      uuid,
      roomName,
      ownerUuid,
      messages,
      createdAt,
      updatedAt,
    });
  });
  return returnValue;
};

export const deleteRoom = async (uuid: string) => {
  try {
    await Room.destroy({ where: { uuid } });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const leaveRoom = async (userUuid: string, roomUuid: string) => {
  try {
    const room = await Room.findOne({ where: { uuid: roomUuid } });
    if (userUuid === room?.ownerUuid) {
      await deleteRoom(roomUuid);
    } else {
      await UserRoom.destroy({ where: { user_uuid: userUuid, room_uuid: roomUuid } });
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
