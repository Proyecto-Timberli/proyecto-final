const nodemailer = require("nodemailer");
const NODEMAILER_KEY = process.env.NODEMAILER_KEY;
let transporter = nodemailer.createTransport({
    service: "hotmail",
    secureConnection: false, // true for 465, false for other ports
    auth: {
        user: "project.timberli@hotmail.com", // generated ethereal user
        pass: "Grupo09*", // generated ethereal password
    },
});

transporter.verify().then(()=>{
    console.log("transporter ready for send emails")
})

module.exports={
    transporter
}