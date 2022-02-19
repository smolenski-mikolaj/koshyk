import express from "express";
import session from "express-session";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./src/config";
import routes from "./src/routes";
import { sequelize } from "./src/db";
import { auth } from "./src/middleware/auth";

import { User } from "./src/models/user";
import { List } from "./src/models/list";
import { Category } from "./src/models/category";
import { Unit } from "./src/models/unit";
import { Product } from "./src/models/product";

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

app.set("trust proxy", 1);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: mode !== "development" },
  })
);
app.use(auth);
app.use(routes);

sequelize.addModels([User, List, Category, Unit, Product]);
sequelize.sync({ alter: mode === "development" });

export default app;
