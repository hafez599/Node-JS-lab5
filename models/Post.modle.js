import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    content:String,
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User" 
    }
})

export const postModel= mongoose.model("Post",postSchema)