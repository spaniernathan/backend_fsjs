import { Server } from 'socket.io';

type MessageData = {
    roomId: string
    msg: string
}

type JoinRoomData = {
    roomId: string
}

type JoinRoomsData = {
    roomIds: Array<string>
}

export default (webSocketServer: Server) => {
  webSocketServer.on('connection', (socket) => {
    // add socket.id to user database ?
    socket.on('join_rooms', (data: JoinRoomsData) => {
      data.roomIds.forEach((id: string) => socket.join(id));
    });

    socket.on('join_room', (data: JoinRoomData) => socket.join(data.roomId));

    socket.on('message', (data: MessageData) => {
      socket.to(data.roomId).emit(data.roomId, data.msg);
    });

    socket.on('disconnect', (data) => {
      // fetch roomsIds from DB with socket.id
    });
  });
};
