import { Request, Response } from "express";
import { connection } from "./db";
import { nanoid } from "nanoid";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, "../dist")));

class Shorten {
  origUrl: string;
  shortUrl: string;

  constructor(origUrl: string, shortUrl: string) {
    this.origUrl = origUrl;
    this.shortUrl = shortUrl;
  }
}

app.get("/:id", async (req: Request, res: Response) => {
  const params = req.params;
  const id: string = params["id"];
  if (id !== "favicon.ico") {
    const result = await connection.query(
      `SELECT * FROM url WHERE shortUrl = ? LIMIT 1;`,
      [id]
    );
    const shortUrls: any = result[0];
    const short: Shorten = shortUrls[0];
    res.redirect(short.origUrl);
  }
});

app.post("/short", async (req: Request, res: Response) => {
  const { url }: { url: string } = req.body;

  let pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  if (!pattern.test(url)) {
    return res.send(null);
  }

  const short: string = nanoid(6);
  const shorten: Shorten = new Shorten(url, short);

  try {
    await connection.query(`INSERT INTO url SET ?`, shorten);
    res.json({ shorten });
  } catch (error) {
    console.log(error);
    res.send(null);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
