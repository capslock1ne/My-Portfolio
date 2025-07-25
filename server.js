import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { createTransport } from "nodemailer";

config();

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/send-email', async (req, res) => {

    const {email , message} = req.body;


   const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


    
const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New message from portfolio",
    text: `From: ${email}\n\nMessage:\n${message}`
};



try {

    await transporter.sendMail(mailOptions); 
    res.json({message: "Message sent successfully!"});
    
} catch (error) {
    console.log(error);
    res.status(500).json({message: "Failed to send message."});
    
}


});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));