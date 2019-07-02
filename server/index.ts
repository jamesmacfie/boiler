import express from 'express';
import cors from 'cors';
import next from 'next';
import { init as initDemo } from './demo';
import { createLogger } from './logger';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const logger = createLogger({ name: 'App', color: 'red' });

app.prepare().then(() => {
  logger.info('👩‍🍳 Preparing app');
  const server = express();
  server.use(cors());

  initDemo(server);

  server.get('*', (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });

  server.listen(port, (err: Error) => {
    if (err) throw err;
    logger.info(`🚀 Ready on http://localhost:${port}`);
  });
});
