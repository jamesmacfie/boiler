import express from 'express';
import { createLogger } from '../logger';

export function init(server: express.Express) {
  const logger = createLogger({ name: 'Demo', color: 'blue' });
  logger.info('🍪 Initializing');

  server.get('/demo/random', (_req: express.Request, res: express.Response) => {
    logger.info('🐔 Generating someting random');
    res.send(Math.floor(Math.random() * 10000));
  });
}
