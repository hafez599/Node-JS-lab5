import PostSchema from "../Validation/PostValidation.js";

const validatePost = (req, res, next) => {
    const validation = PostSchema.validate(req.body);
    if(validation.error){
        return res.status(422).json({message: validation.error.details[0].message})
    }
    next();
}

export default validatePost;