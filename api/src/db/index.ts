import { Sequelize } from "sequelize-typescript";
import config from "../config";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: config.host,
  database: config.database,
  username: config.user,
  password: config.password,
  logging: false,
});
