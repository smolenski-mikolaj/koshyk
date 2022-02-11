import e, { Request, Response, Router } from "express";
import { HttpStatus } from "../helpers/http-status";
import { User } from "../models/user";
import { List } from "../models/list";
import { OAuth2Client } from "google-auth-library";
import config from "../config";

const client = new OAuth2Client(config.googleClientId);
const router = Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response) => {
  if (req.session.userId) {
    const user = await User.findOne({
      where: { id: req.session.userId },
      include: [List],
    });

    res.status(HttpStatus.OK).send(user);
    return;
  }

  res.status(HttpStatus.OK).send(null);
});

router.post("/", async (req: Request, res: Response) => {
  const { idToken } = req.body;

  if (idToken) {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: config.googleClientId,
    });

    const payload = ticket.getPayload();
    const googleId = payload?.sub;

    const [user, created] = await User.findOrCreate({
      where: { googleId },
      include: [List],
      // @ts-ignore
      defaults: {
        googleId: payload?.sub,
        email: payload?.email,
        firstname: payload?.given_name,
        lastname: payload?.family_name,
        name: payload?.name,
        avatar: payload?.picture,
      },
    });

    req.session.userId = user.id;

    if (created) {
      res.status(HttpStatus.Created).send(user);
    } else {
      res.status(HttpStatus.OK).send(user);
    }

    return;
  }

  res.sendStatus(HttpStatus.BadRequest);
});

router.get("/logout", (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.sendStatus(HttpStatus.OK);
  });
});

export default router;
