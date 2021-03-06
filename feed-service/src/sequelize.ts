import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
  dialect: 'postgres',
  storage: ':memory:',
});
