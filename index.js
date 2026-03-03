import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import { connection } from './Database/dbConnector.js';
import { postModel } from './models/Post.modle.js';
import { postRouts } from './Routes/Post.Routs.js';
import { commentRouts } from './Routes/Comment.Routs.js';
import userRoutes from "./Routes/User.Routs.js";

const app = express();
app.use(express.json());
connection
postModel
app.use(userRoutes)
app.use(postRouts)
app.use(commentRouts)

app.listen(3000,()=>{
    console.log("server on port 3000")
})