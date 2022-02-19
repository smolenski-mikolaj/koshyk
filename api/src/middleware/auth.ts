import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../helpers/http-status";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.url.includes("users") && !req.session.userId) {
    res.sendStatus(HttpStatus.Unauthorized);

    return;
  }

  next();
};
