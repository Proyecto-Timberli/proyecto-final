// const nodemailer = require("nodemailer");
// const NODEMAILER_KEY = process.env.NODEMAILER_KEY;
// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: "project.timberli@gmail.com", // generated ethereal user
//         pass: NODEMAILER_KEY, // generated ethereal password
//     },
// });

// transporter.verify().then(()=>{
//     console.log("transporter ready for send emails")
// })

// module.exports={
//     transporter
// }