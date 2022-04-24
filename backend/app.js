import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors";
import post from "./routes/post.js"
import user from "./routes/user.js"
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

const app= express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser())
dotenv.config({ path: "backend/config/config.env" });


const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then((con) => console.log(`Database Connected: ${con.connection.host}`))
  
  .catch((err) => console.log(`connection error${err}`));


  

  cloudinary.config({
    cloud_name: "dbrowom8o",
    api_key: "979626559953374",
    api_secret: "LwuezP96STZleUF8k3lTnsQ6jyk",
  });

//using route
app.use("/api/v1",post);
app.use("/api/v1",user);

  

export default app;