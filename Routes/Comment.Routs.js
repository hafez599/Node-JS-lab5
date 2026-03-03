import { getComments, updateComment, createComment, deleteComment} from "../Controller/Comment.controller.js";
import verifyToken from "../Middleware/Verifyroken.js";
import express from "express"
const commentRouts =express.Router()

commentRouts.use(verifyToken)

commentRouts.get('/comments',getComments)
// commentRouts.get('/comment/:id',getPostById)
commentRouts.post('/comment/:postId',createComment)
commentRouts.put('/comment/:id',updateComment)
commentRouts.delete('/comment/:commentId',deleteComment)



export{commentRouts}