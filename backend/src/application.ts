import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import path from "path";
import * as bodyParser from "body-parser";
import { mainController } from "./controllers/main";
import cors from 'cors';

const app = express();

app.use(cors());

dotenv.config();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use(mainController);

app.get("*", (_: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

export default app;
