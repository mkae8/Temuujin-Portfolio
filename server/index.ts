import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendEmailRouter from "./router/sendEmailRouter";

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api", sendEmailRouter);
app.listen(port, () => {
  console.log(`🚀 Server nee deer asna --> http://localhost:${port}`);
});
