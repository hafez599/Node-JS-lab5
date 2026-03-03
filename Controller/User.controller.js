import userModel from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../Email/Email.js";

let signup = async (req, res) => {
    let addUser = await userModel.insertMany(req.body);
    addUser[0].password = undefined;
    sendEmail(req.body.email);
    
    res.json({ message: "User Added. Please check your email to verify.", data: addUser });
}

let signin = async (req, res) => {
    let foundUser = req.foundUser; 
    let matchPassword = bcrypt.compareSync(req.body.password, foundUser.password);
    
    if (matchPassword) {
        if (foundUser.isConfirmed == false) {
            return res.status(401).json({ message: "Please Verify Your Email First" });
        }
        let token = jwt.sign({ _id: foundUser._id, role: foundUser.role, email: foundUser.email }, "iti");
        return res.json({ message: "Welcome", data: foundUser, token: token });
    }
    res.status(422).json({ message: "Invalid Password or Email" });
}

let verifyAccount = (req, res) => {
    const { token } = req.params;

    jwt.verify(token, "emailToken", async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid or Expired Token" });
        }
        const userEmail = decoded.email;
        const user = await userModel.findOneAndUpdate(
            { email: userEmail },
            { isConfirmed: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).send("<h1>Account Verified!</h1><p>You can now sign in.</p>");
    });
}

export { signup, signin, verifyAccount };