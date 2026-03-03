import joi from "joi";

const PostSchema = joi.object({
    content: joi
        .string()
        .min(1)
        .max(500)
        .required()
        .messages({
            "string.empty": "Post content cannot be empty",
            "string.min": "Post must contain at least 1 character",
            "string.max": "Post cannot exceed 500 characters"
        }),

    createdBy: joi
        .string()
        .hex()
        .length(24)
        .messages({
            "string.hex": "Invalid User ID format",
            "string.length": "User ID must be 24 characters"
        })
});

export default PostSchema;