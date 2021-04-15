// import { Sequelize } from 'sequelize-typescript';
// import { config } from './config/config';

// export const sequelize = new Sequelize({
//   host: config.host,
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   port: 5432,
//   dialect: config.dialect,
//   storage: ':memory:',
// });

import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
  dialect: 'postgres',
  storage: ':memory:',
});
