import joi from "joi";

const userSchema = joi.object({
    name: joi.string().min(3).max(10),
    email: joi.string().email().message({
        "string.email": "Please enter a valid email address"
    }),
    password: joi.string().min(6).max(10).required().pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$')).messages({
        "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, and one number _ From Note APP",
    }),
    age: joi.number().min(20).max(50)   
});

export default userSchema;