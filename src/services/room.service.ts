import { Room, Message, UserRoom } from '../db/models';

export const createRoom = async (input: Room) => Room.create({ ...input });

export const findRoomsByUserUuid = async (userUuid: string) => Room.findAll({
  where: { userUuid },
  include: {
    model: Message,
    as: 'messages',
  },
});

export const deleteRoom = async (uuid: string) => {
  try {
    Room.destroy({ where: { uuid } });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const leaveRoom = async (userUuid: string, roomUuid: string) => {
  try {
    const room = await Room.findOne({ where: { uuid: roomUuid } });
    if (userUuid === room?.userUuid) {
      await deleteRoom(roomUuid);
    } else {
      await UserRoom.destroy({ where: { user_uuid: userUuid, room_uuid: roomUuid } });
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
