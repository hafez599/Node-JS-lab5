import { getPosts,createPost,updatePost,deletePost,getPostById } from "../Controller/Post.controller.js";
import verifyToken from "../Middleware/Verifyroken.js";
import validatePost from "../Middleware/PostValidation.js";
import express from "express"
const postRouts =express.Router()

postRouts.use(verifyToken) // global middleware for all post routes

postRouts.get('/post',getPosts)
postRouts.get('/post/:id',getPostById)
postRouts.post('/post',validatePost,createPost)
postRouts.put('/post/:id',validatePost,updatePost)
postRouts.delete('/post/:id',deletePost)



export{postRouts}