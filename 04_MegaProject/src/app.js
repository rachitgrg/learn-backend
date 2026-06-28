import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// app .use() jb use krte h jab middleware ho

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));  // so it doesn't craash our server with manyy request

app.use(express.urlencoded({extended: true, limit: "16kb"}))    // for url encoding
app.use(express.static("public"))                               // public folder for temporary things like images, pdfs
app.use(cookieParser())                                         // access and set cookies from user's browser

export { app };
