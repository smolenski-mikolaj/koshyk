import express from "express";
import session from "express-session";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./src/config";
import routes from "./src/routes";
import { sequelize } from "./src/db";
import { User } from "./src/models/user";
import { List } from "./src/models/list";

const mode = process.env.NODE_ENV || "development";
declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

const app = express();
app.use(cors({ origin: config.origin, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: mode !== "development" },
  })
);
app.use(routes);

sequelize.addModels([User, List]);
sequelize.sync({ alter: mode === "development" });

export default app;
