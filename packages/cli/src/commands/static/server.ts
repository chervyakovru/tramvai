import type { Server } from 'http';
import express from 'express';
import compression from 'compression';
import zlib from 'zlib';
import type { ConfigManager } from '../../config/configManager';

export const startServer = (configManager: ConfigManager): Promise<Server> => {
  const { port } = configManager;
  const app = express();

  // WEB-389: Переключить на brotli после мержа https://github.com/expressjs/compression/pull/156
  app.use(
    compression({
      level: zlib.Z_DEFAULT_COMPRESSION,
    })
  );

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    next();
  });

  app.use('/', express.static(configManager.build.options.outputStatic));

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.info('Running server on port', port); // eslint-disable-line no-console

      resolve(server);
    });
  });
};
