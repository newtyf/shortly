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
exports.connection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
let connection;
exports.connection = connection;
const createConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        exports.connection = connection = yield promise_1.default.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: parseInt(process.env.DB_PORT),
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        console.log("*** CONNECTION STABLISHED ***");
        yield connection.query(`CREATE TABLE IF NOT EXISTS url (
        id INT AUTO_INCREMENT,
        origUrl VARCHAR(255),
        shortUrl VARCHAR(10),
        PRIMARY KEY (id)
      );`);
    }
    catch (error) {
        console.log(error);
    }
});
createConnection();
