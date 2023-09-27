
const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')
const bcrypt = require("bcrypt")
const {makeUserDb,makeAuditDb}=require('../../data-access/index');

async function makeResetPasswordByUser(id, userInfo) {
    console.log("userInfo", userInfo)
    console.log("id", id)
    //return async function resetPasswordByUser() { 
        //const res = await makeUserDb.GetToken({token:userInfo.token})
        console.log("userInfo", userInfo)
        console.log("id", id)
        const res = await makeUserDb.GetById(id = id)
        console.log("res", res)

        if(res[0]=="undefined" || res[0]==undefined)
        {
            //throw new NotFoundError('Token expired')
            return false

        }
        else
        { 
            const newPasswordencrypt = await bcrypt.hash(userInfo.NewPassword,10);
            console.log("expired",res);
            const ruleRunners = MakeRulesRunner(await IPasswordExistsById(res[0].USER_ID,newPasswordencrypt))
            console.log("expiredDDDD",ruleRunners);
            if(ruleRunners === null){
                console.log("expired",res);
                    //await makeAuditDb.UserAudit({Id:res[0].USER_ID,Type:"Reset Password",Effect:"Password Changed Successfully",Status:1});
                    var count = await makeUserDb.GetCount(res[0].USER_ID);
                    console.log(count);
                    var pass_count = 0;
                    if (count[0].PASS_COUNT == null || count[0].PASS_COUNT == 0){
                        pass_count = 1
                    } else {
                        pass_count = count[0].PASS_COUNT + 1
                    }
                    await makeUserDb.InsertPasswordLog({Id:res[0].USER_ID,RPassword:newPasswordencrypt,LPassword:res[0].USER_PASSWORD,Event:"Reset Password",Count:pass_count,Status:1});

                    await makeUserDb.UpdatePassword({Id:res[0].USER_ID,Password:newPasswordencrypt})
                    //return await makeUserDb.UpdatePasswordTrack({Id:res[0].USER_ID,Password:res[0].USER_PASSWORD,token:userInfo.token,NewPassword:newPasswordencrypt})
                    await makeUserDb.UpdatePasswordTrack({Id:res[0].USER_ID,Password:res[0].USER_PASSWORD,token:"No token",NewPassword:newPasswordencrypt})
                    return true
                }
        }
    //}


   
    async function IPasswordExistsById(id,Password){
        const result = await makeUserDb.GetPasswordById(id)
        console.log("expired",result[0]);
        if(result[0].SECOND_PASSWORD==null && result[0].THIRD_PASSWORD==null)
        {
            if((await bcrypt.compare(Password,result[0].FIRST_PASSWORD)))
            {
                //await makeAuditDb.UserAudit({Id:id,Type:"Change Password",Effect:"New Password should not be similiar to last 3 passwords",Status:0});
                console.log("expired","red");

                throw new NotFoundError('New Password should not be similiar to last 3 passwords')
            }
        }
        else if(result[0].THIRD_PASSWORD==null)
        {
            if((await bcrypt.compare(Password,result[0].FIRST_PASSWORD)) || (await bcrypt.compare(Password,result[0].SECOND_PASSWORD)))
            {
                //await makeAuditDb.UserAudit({Id:id,Type:"Change Password",Effect:"New Password should not be similiar to last 3 passwords",Status:0});
                console.log("expired","red");

                throw new NotFoundError('New Password should not be similiar to last 3 passwords')
            }
        }
        else
        {
            if((await bcrypt.compare(Password,result[0].FIRST_PASSWORD)) || (await bcrypt.compare(Password,result[0].SECOND_PASSWORD))
            || (await bcrypt.compare(Password,result[0].THIRD_PASSWORD)))
            {
                //await makeAuditDb.UserAudit({Id:id,Type:"Change Password",Effect:"New Password should not be similiar to last 3 passwords",Status:0});
                console.log("expired","red");

                throw new NotFoundError('New Password should not be similiar to last 3 passwords')
            }
        }
           
    }  
  
  
}






module.exports = makeResetPasswordByUser