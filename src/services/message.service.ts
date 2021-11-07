import { Message } from '../db/models';

export const createRoomMessage = async (input: Message) => Message.create({ ...input });

export const findRoomMessages = async (
  uuid: string,
) => Message.findAll({
  where: { roomUuid: uuid },
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
