import joi from "joi";

const commentSchema = joi.object({
    content: joi
        .string()
        .min(1)
        .max(200)
        .required()
        .messages({
            "string.empty": "Comment cannot be empty",
            "string.min": "Comment must contain at least 1 character",
            "string.max": "Comment cannot exceed 200 characters"
        }),

    postId: joi
        .string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.hex": "Invalid Post ID format",
            "string.length": "Post ID must be 24 characters",
            "any.required": "Post ID is required"
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

export default commentSchema;