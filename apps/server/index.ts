import "dotenv/config"
import { Request, Response, Router } from "express";
import { connection } from "./db";
import { nanoid } from "nanoid";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

const router = Router()
app.use("/api", router)

app.use(express.static(path.join(__dirname, "../../", "client/dist")));

class Shorten {
  origUrl: string;
  shortUrl: string;

  constructor(origUrl: string, shortUrl: string) {
    this.origUrl = origUrl;
    this.shortUrl = shortUrl;
  }
}

router.get("/:id", async (req: Request, res: Response) => {
  const params = req.params;
  const id: string = params["id"];

  if (id === "favicon.ico") {
    return;
  }

  let result: any;

  try {
    result = await connection.query(
      `SELECT * FROM url WHERE shortUrl = ? LIMIT 1;`,
      [id]
    );
  } catch (error) {
    console.log(error);
    res.json({ message: "short url no valida" });
  }

  const shortUrls: Shorten[] = result[0];

  if (shortUrls.length === 0) {
    res.json({ message: "short url no valida" });
    return
  }

  const short: Shorten = shortUrls[0];
  res.redirect(short.origUrl);
});

router.post("/short", async (req: Request, res: Response) => {
  const { url } = req.body;

  let pattern = /^(https?:\/\/)/;
  if (!pattern.test(url)) {
    return res.json({});
  }

  const short: string = nanoid(6);
  const shorten: Shorten = new Shorten(url, short);

  try {
    await connection.query(`INSERT INTO url SET ?`, shorten);
    res.json({ shorten });
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
