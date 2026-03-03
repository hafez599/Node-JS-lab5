import commentSchema from "../Validation/CommentValidation.js";

const validateComment = (req, res, next) => {
    const validation = commentSchema.validate(req.body);
    if(validation.error){
        return res.status(422).json({message: validation.error.details[0].message})
    }
    next();
}

export default validateComment;