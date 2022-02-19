import { Request, Response, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import { Product } from "../models/product";

const router = Router({ mergeParams: true });

router.get("/:categoryId", async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  const products = await Product.findAll({
    where: { categoryId },
  });

  res.status(HttpStatus.OK).send(products);
});

export default router;
