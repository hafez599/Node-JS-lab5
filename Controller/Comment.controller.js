import commentModel from "../models/Comment.model.js";


 const getComments = async (req,res)=>{
    let decoded = req.decoded
    let comments = await commentModel.find({createdBy: decoded._id})
    res.json({data:comments,message:"get all comments"})
}

const createComment = async (req,res)=>{
    let decoded = req.decoded
    req.body.createdBy = decoded._id
    let postId = req.params.postId 
    req.body.postId = postId
    let newComment = await commentModel.insertMany(req.body)
    res.status(201).json({data:newComment,message:"Comment created"})
}

const updateComment = async (req, res) => {
    let commentId = req.params.id
    let decoded = req.decoded

    let updatedComment = await commentModel.findOneAndUpdate(
        { _id: commentId, createdBy: decoded._id },
        req.body,
        { new: true }
    )

    if (!updatedComment) {
        return res.status(403).json({
            message: "You are not allowed to update this comment"
        })
    }

    res.status(200).json({
        data: updatedComment,
        message: "Comment updated successfully"
    })
}

const deleteComment = async (req, res) => {
    let deletedComment = await commentModel.findOneAndDelete({
        _id: req.params.commentId, 
        createdBy: req.decoded._id 
    })

    if (!deletedComment) {
        return res.status(404).json({ message: "Comment not found or unauthorized" })
    }

    res.status(200).json({ message: "Comment deleted successfully" })
}
export{getComments,createComment,updateComment,deleteComment}