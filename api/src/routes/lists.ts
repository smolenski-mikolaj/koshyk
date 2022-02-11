import { Response, Request, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import { List } from "../models/list";

const router = Router({ mergeParams: true });

router.put("/", async (req: Request, res: Response) => {
  const { listName } = req.body;

  if (req.session.userId && listName) {
    // @ts-ignore
    const list = new List({ name: listName, userId: req.session.userId });
    list.save();

    res.status(HttpStatus.OK).send(list);

    return;
  }

  res.sendStatus(HttpStatus.BadRequest);
});

export default router;
