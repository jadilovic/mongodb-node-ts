import express from "express";
import { connect } from "./db";
import * as dotenv from "dotenv";
import * as artistController from "./controllers/artists";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/artists", artistController.all);
app.post("/artists", artistController.create);
app.get("/artists/:id", artistController.findById);
app.put("/artists/:id", artistController.update);
app.delete("/artists/:id", artistController.deleteById);

const startServer = async () => {
  await connect(process.env.MONGO_DB || "", "api");

  app.listen(3012, () => {
    console.log("Listening at port 3012");
  });
};

startServer();
