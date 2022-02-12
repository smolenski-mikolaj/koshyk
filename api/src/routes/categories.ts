import { Request, Response, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import { Category } from "../models/category";

const router = Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response) => {
  if (req.session.userId) {
    const categories = await Category.findAll();

    res.status(HttpStatus.OK).send(categories);
    return;
  }

  res.sendStatus(HttpStatus.Unauthorized);
});

export default router;
