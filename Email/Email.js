import nodemailer from "nodemailer";
import { template } from "./emailTemplate.js";
import jwt from "jsonwebtoken";

export default async function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hafezadel599@gmail.com",
            pass: "mtqk qmpm onjr kbct",
        },
    });

    // Sign the email into a token
    let emailToken = jwt.sign({ email }, "emailToken", { expiresIn: '1h' });

    const info = await transporter.sendMail({
        from: '"From Note APP" <hafezadel599@gmail.com>',
        to: email,
        subject: "Welcome to Note App",
        html: template(emailToken), // Passing the token to the template
    });

    console.log("Message sent:", info.messageId);
}