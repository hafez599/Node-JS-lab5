import express from "express";
import {signin, signup, verifyAccount } from "../Controller/User.controller.js";
import checkEmail from "../Middleware/CheckEmail.js";
import hashPassword from "../Middleware/HashPassword.js";


let userRoutes = express.Router();

// userRoutes.get("/users", listUsers);
userRoutes.post("/signup",checkEmail,hashPassword, signup);
userRoutes.post("/signin",checkEmail, signin)
userRoutes.get("/verify/:token", verifyAccount);
export default userRoutes