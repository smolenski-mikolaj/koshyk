import { Response, Request, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import users from "./users";
import lists from "./lists";

const router = Router({ mergeParams: true });

router.get("/", (req: Request, res: Response) => res.sendStatus(HttpStatus.OK));
router.use("/users", users);
router.use("/lists", lists);

export default router;
