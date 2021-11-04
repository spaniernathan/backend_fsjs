import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import config from './config';
import createAssociations from './db/associations';
import logger from './logger';
import routes from './routes';
import { deserializeUser } from './middlewares';
import sockets from './sockets';

const port = config.port as number;
const host = config.host as string;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(deserializeUser);

const httpServer = http.createServer(app);
const webSocketServer = new Server(httpServer, {
  cors: {
    origin: `http://${host}:${port}`,
    methods: ['GET', 'POST'],
  },
});

createAssociations();

sockets(webSocketServer);

httpServer.listen(port, () => {
  logger.info(`Server running on http://${host}:${port}`);
  routes(app);
});
