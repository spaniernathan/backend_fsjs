import { Room } from '../db/models';

export const createRoom = async (input: Room) => Room.create({ ...input });

export const findRoomsByUserUuid = async (userUuid: string) => Room.findAll({
  where: { userUuid },
});

export const deleteRoom = async (uuid: string) => {
  try {
    Room.destroy({ where: { uuid } });
  } catch (error: any) {
    throw new Error(error);
  }
};
