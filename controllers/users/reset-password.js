
const {headers}=require('../../config/config')
var nodemailer = require('nodemailer');
const {makeUserDb,makeAuditDb}=require('../../data-access/index');
const jwt = require("jsonwebtoken")

function ResetPasswordController({makeResetPassword}){
    
    return async function handle(httpRequest){    
        const {body}=httpRequest;
        const res=httpRequest.ffdata;
        const result=await makeResetPassword(body.Email)
        console.log(result)
        var mail = 'ispeckdigital1@gmail.com';
        var pass = 'fibdeucfdflxigdx';
        var mail = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: mail, 
                    pass:  pass
                }
            });
     
                var mailOptions = {
                    from: mail,
                    to: body.Email,
                    subject: 'Reset Password Link',
                    //html: '<p>You requested for reset password, kindly use this <a href="http://ec2-13-234-122-116.ap-south-1.compute.amazonaws.com/reset_password/'+result.id+'/' + result.token + '">link</a> to reset your password.valid for 15 minutes only.</p>'
                    html: '<p>You requested for reset password, kindly use this <a href="http://103.13.113.132:4650/reset_password/'+result.id + '">Link</a> to reset your password.valid for 20 minutes only.</p>'
                };
     
                mail.sendMail(mailOptions, async function(error, info) {
                    if (error) 
                    {
                        //await makeAuditDb.UserAudit({Id:result.id,Type:"Sending Reset Password Link",Effect:"Sending Failed",Status:0});
                        res.send({statusCode:200, message: "Email Sending Failed"})
                    } 
                    else 
                    {
                        //await makeAuditDb.UserAudit({Id:result.id,Type:"Sending Reset Password Link",Effect:"Link Send",Status:1});

                            setTimeout( async function(){
                                await makeUserDb.ChangeTokenTime(result.token)
 
                                jwt.verify(result.token,'Reset Password', (err, verifiedJwt) => {
                                    if(err){
                                      res.send(err.message)
                                    }});
                            },100000)

                        await makeUserDb.Inserttoken({id:result.id,token:result.token})
                        res.send({statusCode:200, message: "Email Send Successfully"})

                    }
                });

      
        }

}

module.exports=ResetPasswordController