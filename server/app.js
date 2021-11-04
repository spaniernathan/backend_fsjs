const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

var dict = {};

const port = 8000;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

server.listen(port, function() {
    console.log("listen on port : " + port);
});

io.on("connection", (socket) => {
    console.log("connection de l'utilisateur", socket.id);

    socket.on("join_room", (roomID) => {
        socket.join(roomID);
    });

    // il faut une map clé:name / value:socket

    socket.on("invite", (username) => {
        socket.to(username).emit("receive_invite_room", roomID);
    });

    // io.on("connection", async (socket) => {
    //     const userId = await fetchUserId(socket);
      
    //     socket.join(userId);
      
    //     // and then later
    //     io.to(userId).emit("hi");
    //   });

    socket.on("send_message", (data) => {

        console.log(data);
        io.emit("receive_message", data);
        //        io.in("room1").emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

// const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", function connection(ws) {
//     ws.on("message", function incoming(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data, { binary: isBinary });
//             }
//         });
//     });
// });

// server.listen(port, function() {
//     console.log("listening on port:" + port);
// })