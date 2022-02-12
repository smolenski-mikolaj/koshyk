import { Response, Request, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import users from "./users";
import categories from "./categories";

const router = Router({ mergeParams: true });

router.get("/", (req: Request, res: Response) => res.sendStatus(HttpStatus.OK));
router.use("/users", users);
router.use("/categories", categories);

export default router;
