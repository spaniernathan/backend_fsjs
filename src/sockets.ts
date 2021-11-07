import { randomUUID } from 'crypto';
import { get } from 'lodash';
import { Server } from 'socket.io';
import { SocketRoom, Message, User } from './db/models';

type MessageData = {
  roomUuid: string
  ownerUuid: string
  value: string
}

type JoinRoomData = {
  roomUuid: string
}

type JoinRoomsData = {
  roomUuids: Array<string>
}

export default (webSocketServer: Server) => {
  webSocketServer.on('connection', (socket) => {
    socket.on('join_rooms', async ({ roomUuids }: JoinRoomsData) => {
      await socket.join(roomUuids);
      await Promise.all(roomUuids.map(async (id: string) => SocketRoom.create(
        { uuid: randomUUID(), socketUuid: socket.id, roomUuid: id },
      )));
    });

    socket.on('join_room', async ({ roomUuid }: JoinRoomData) => {
      await socket.join(roomUuid);
      await SocketRoom.create({ uuid: randomUUID(), socketUuid: socket.id, roomUuid });
    });

    socket.on('message', async ({ value, roomUuid, ownerUuid }: MessageData) => {
      const user = await User.findOne({ where: { uuid: ownerUuid } });
      const msg = await Message.create({
        uuid: randomUUID(), ownerUuid, roomUuid, value, senderName: user?.displayName || 'unknown',
      });
      await socket.emit('room.uuid', {
        ...get(msg, 'dataValues'), senderName: user?.displayName || 'unknown', roomUuid,
      });
    });

    socket.on('disconnect', async () => {
      await SocketRoom.destroy({
        where: { socketUuid: socket.id },
      });
    });
  });
};
