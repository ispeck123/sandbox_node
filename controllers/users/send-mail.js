var nodemailer = require('nodemailer');

//function SendMailController(){

    function SendMailController(receiverMailId, subject, text){

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ispeckdigital1@gmail.com',
            pass: 'fibdeucfdflxigdx'
        }
        });

        var mailOptions = {
        from: 'ispeckdigital1@gmail.com',
        to: receiverMailId,
        subject: subject,
        text: text
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error while sending mail:", error);
        } else {
            console.log("Info of sending mail:", info)
            console.log('Email sent:' + info.response);
        }
        });
    }

//}

module.exports = SendMailController