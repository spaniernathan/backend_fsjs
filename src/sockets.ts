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
    // get token from socket => if not valid => disconnect socket ?
    // console.log(get(socket, 'request.headers.authorization'));
    socket.on('join_rooms', async ({ roomUuids }: JoinRoomsData) => {
      socket.join(roomUuids);
      await Promise.all(roomUuids.map(async (id: string) => SocketRoom.create(
        { uuid: randomUUID(), socketUuid: socket.id, roomUuid: id },
      )));
    });

    socket.on('join_room', async ({ roomUuid }: JoinRoomData) => {
      socket.join(roomUuid);
      await SocketRoom.create({ uuid: randomUUID(), socketUuid: socket.id, roomUuid });
    });

    socket.on('message', async ({ value, roomUuid, ownerUuid }: MessageData) => {
      const user = await User.findOne({ where: { uuid: ownerUuid } });
      socket.to(roomUuid).emit(roomUuid, { value, senderName: user?.displayName || 'unknown', createdAt: Date.now() });
      await Message.create({
        uuid: randomUUID(), ownerUuid, roomUuid, value, senderName: user?.displayName || 'unknown',
      });
    });

    socket.on('disconnect', async () => {
      await SocketRoom.destroy({
        where: { socketUuid: socket.id },
      });
    });
  });
};
