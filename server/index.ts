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
  const id = params["id"];
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
  const { url } = req.body;
  const short = nanoid(6);
  const shorten = {
    origUrl: url,
    shortUrl: short,
  };

  try {
    await connection.query(`INSERT INTO url SET ?`, shorten);
    res.json({ shorten });
  } catch (error) {
    console.log(error);
    // res.statusCode = 500;
    res.send(null);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
