"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = require("express");
const db_1 = require("./db");
const nanoid_1 = require("nanoid");
const cors_1 = __importDefault(require("cors"));
const express_2 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_2.default)();
const port = process.env.PORT || 3000;
app.use(express_2.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
const router = (0, express_1.Router)();
app.use("/api", router);
app.use(express_2.default.static(path_1.default.join(__dirname, "../../", "client/dist")));
class Shorten {
    constructor(origUrl, shortUrl) {
        this.origUrl = origUrl;
        this.shortUrl = shortUrl;
    }
}
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const id = params["id"];
    if (id === "favicon.ico") {
        return;
    }
    let result;
    try {
        result = yield db_1.connection.query(`SELECT * FROM url WHERE shortUrl = ? LIMIT 1;`, [id]);
    }
    catch (error) {
        console.log(error);
        res.json({ message: "short url no valida" });
    }
    const shortUrls = result[0];
    if (shortUrls.length === 0) {
        res.json({ message: "short url no valida" });
        return;
    }
    const short = shortUrls[0];
    res.redirect(short.origUrl);
}));
router.post("/short", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    let pattern = /^(https?:\/\/)/;
    if (!pattern.test(url)) {
        return res.json({});
    }
    const short = (0, nanoid_1.nanoid)(6);
    const shorten = new Shorten(url, short);
    try {
        yield db_1.connection.query(`INSERT INTO url SET ?`, shorten);
        res.json({ shorten });
    }
    catch (error) {
        console.log(error);
        res.json({});
    }
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
