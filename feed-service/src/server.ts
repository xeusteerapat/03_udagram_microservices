import cors from 'cors';
import express from 'express';
import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/v0/index.router';
import { config } from './config/config';
import { V0_FEED_MODELS } from './controllers/v0/model.index';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(express.json());
  app.use(
    cors({
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization',
      ],
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: config.url,
    })
  );

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get('/', async (req, res) => {
    res.send({
      apiVersion: 'v0',
      service: 'Feed',
    });
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`Feed service is running ${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
