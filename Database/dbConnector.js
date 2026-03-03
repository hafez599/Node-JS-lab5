

import mongoose from "mongoose"
import "dotenv/config" 
export const connection = mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("connected to db"))
.catch((err)=>console.log(err));