
const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')
const {makeUserDb,makeAuditDb}=require('../../data-access/index');
var randtoken = require('rand-token');
const jwt = require("jsonwebtoken")

function makeResetPassword() {
    return async function resetPassword(userInfo) { 
        console.log(userInfo)


       const res=await makeUserDb.GetByEmail({email:userInfo})
       console.log(res)

       const ruleRunners=MakeRulesRunner(await IEmailExists(userInfo))
        if(ruleRunners===null){
            const JWT_TOKEN="Reset Password"+randtoken.generate(5);
            const payload = {
                email:res[0].USER_EMAIL,
                id: res[0].USER_ID
            }
            const new_token= JWT_TOKEN + res[0].USER_PASSWORD;
            const token=jwt.sign(payload,new_token,{expiresIn: "15m"})   
            return({id:res[0].USER_ID,token:token,pass:res[0].USER_PASSWORD});
   
        }
    }


    async function IEmailExists(email){
        const result=await makeUserDb.CheckPass(email)
        console.log("Reset Password",result.length)

        if(result.length==0)
        {

            throw new NotFoundError('Email doesnot exist')
        }   
    }
    

  
}






module.exports = makeResetPassword