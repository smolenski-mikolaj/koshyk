import { Request, Response, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import { Category } from "../models/category";

const router = Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response) => {
  const categories = await Category.findAll();

  res.status(HttpStatus.OK).send(categories);
});

export default router;
