import { Message, Room } from '../db/models';

export const createRoomMessage = async (input: Message) => Message.create({ ...input });

export const findRoomMessages = async (
  uuid: string,
) => Room.findOne({
  where: { uuid },
  include: {
    model: Message,
    as: 'messages',
  },
});

export const deleteRoomMessage = async (uuid: string) => {
  try {
    Message.destroy({
      where: { uuid },
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
