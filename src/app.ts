import express from 'express';
import config from 'config';
import createAssociations from './db/associations';
import logger from './logger';
import routes from './routes';
import { deserializeUser } from './middlewares';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(deserializeUser);

createAssociations();

app.listen(port, host, () => {
  logger.info(`Server running on http://${host}:${port}`);
  routes(app);
});
