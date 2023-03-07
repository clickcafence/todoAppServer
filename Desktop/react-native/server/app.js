import express from 'express';
import User from "./routers/User.js";
export const app = express();
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.use(cors());
app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.send("Server is working");
});

