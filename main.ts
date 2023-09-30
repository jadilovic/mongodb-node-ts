import express from "express";
import { connect } from "./db";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const startServer = async () => {
  await connect(process.env.MONGO_DB || "", "api");

  app.listen(3012, () => {
    console.log("Listening at port 3012");
  });
};

startServer();
