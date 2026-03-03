import mongoose, { Schema, model } from "mongoose";

const commentSchema = new Schema({
    content:{
        type: String,
        minlength: 1, 
        maxlength: 200
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    postId:{
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
},{
    timestamps: true,
    versionKey: false 
})

const commentModel = model("comment", commentSchema);

export default commentModel