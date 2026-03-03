import { postModel } from "../models/Post.modle.js";


 const getPosts = async (req,res)=>{
    let decoded = req.decoded
    let posts = await postModel.find({createdBy: decoded._id}).populate("createdBy", "name email")
    res.json({data:posts,message:"get all posts"})
}

const createPost=async (req,res)=>{
    let decoded = req.decoded
    req.body.createdBy = decoded._id
    let newPost = await postModel.insertMany(req.body)
    res.status(201).json({data:newPost,message:"post created"})
}

const updatePost=async(req,res)=>{
    let decoded = req.decoded
    let id = req.params.id
    let updatePost = await postModel.findByIdAndUpdate({_id: id, createdBy: decoded._id},req.body)
    res.status(200).json({data:updatePost,message:"post updated"})


}

const deletePost=async(req,res)=>{
    let decoded = req.decoded
    let id = req.params.id
    let deletedPost = await postModel.findOneAndDelete({
        _id: id,
        createdBy: decoded._id
    })

    if (!deletedPost) {
        return res.status(403).json({
            message: "You are not authorized to delete this post"
        })
    }
    res.status(200).json({data:deletedPost,message:"post deleted"})

}
const getPostById = async(req,res)=>{
    let id = req.params.id
    let getPost= await postModel.findById(id)
        res.status(200).json({data:getPost,message:"get post by id"})

}
export{getPosts,createPost,updatePost,deletePost,getPostById}