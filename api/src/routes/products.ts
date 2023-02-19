import { Request, Response, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import { Product } from "../models/product";
import { Unit } from "../models/unit";

const router = Router({ mergeParams: true });

router.get("/:categoryId", async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  const products = await Product.findAll({
    where: { categoryId },
    include: [Unit],
  });

  res.status(HttpStatus.OK).send(products);
});

export default router;
