
const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')
const bcrypt = require("bcrypt")
const {makeUserDb,makeAuditDb}=require('../../data-access/index');


function makeChangePassword() {
    return async function changePassword(id,body) { 
        console.log("\n\n\n____________IN makeChangePassword__________________\n");
        console.log("|- id:    ",  id);
        console.log("|- newPassword:    ",  body.newPassword);
        console.log("|- oldPassword:    ",  body.oldPassword);


        const newPasswordencrypt = await bcrypt.hash(body.newPassword,10);
        const OldPasswordencrypt = await bcrypt.hash(body.oldPassword,10);

        let userVerified = await verifyUserOldPassword(id, body.oldPassword);
        if (userVerified == true){
            if (body.newPassword === "" || body.newPassword.length <= 0) {
                return{
                    headers,
                    statusCode:404,
                    body:{
                        message:'New password cannot be empty'
                    }
                }
            } else {
                var count = await makeUserDb.GetCount(id);
                console.log(count);
                var pass_count = 0;
                if (count[0].PASS_COUNT == null || count[0].PASS_COUNT == 0){
                    pass_count = 1
                } else {
                    pass_count = count[0].PASS_COUNT + 1
                }
                await makeUserDb.InsertPasswordLog({Id:id,RPassword:newPasswordencrypt,LPassword:OldPasswordencrypt,Event:"Change Password",Count:pass_count,Status:1});
                await makeUserDb.UpdatePassword({Id:id,Password:newPasswordencrypt});
                return await makeUserDb.UpdatePasswordTrack({Id:id,Password:OldPasswordencrypt,token:"No token",NewPassword:newPasswordencrypt});
            }
        } else{
            return{
                headers,
                statusCode:400,
                body:{
                    message:'Current password is wrong'
                }
            }
        }

        // const ruleRunners=MakeRulesRunner(await IPasswordExistsById(id,body.newPassword))
        // if(ruleRunners===null){
        //     // console.log("Rule Runner:::")
        //     // console.log("4")

        //     var count = await makeUserDb.GetCount(id);
        //     // console.log("Password change count", count);  

        //     await makeUserDb.InsertPasswordLog({Id:id,RPassword:newPasswordencrypt,LPassword:OldPasswordencrypt,Event:"Change Password",Count:count[0].PASS_COUNT,Status:1});
        //     // console.log("3")  

        //   await makeUserDb.UpdatePassword({Id:id,Password:newPasswordencrypt})
        // //   console.log("5")  

        //   return await makeUserDb.UpdatePasswordTrack({Id:id,Password:OldPasswordencrypt,token:"No token",NewPassword:newPasswordencrypt});

        // }
    }

    async function verifyUserOldPassword (id, oldPassword) {
        console.log("\n\n\n__________________USER PASSWORD::", id,"VERIFICATION____________\n")
        let user = await makeUserDb.GetById(id);
        // console.log(user[0].USER_PASSWORD, bcrypt.hashSync(oldPassword, 10), oldPassword);
        let isPasswordVerified = await bcrypt.compare(oldPassword, user[0].USER_PASSWORD);
        if (!isPasswordVerified) {
            await makeAuditDb.UserAudit({Id:id,Type:"Change Password",Effect:"Current entered password is wrong",Status:0});
            throw new NotFoundError("You entered wrong current password!");
        }
        return isPasswordVerified;
    }

    
    async function IPasswordExistsById(id,newPassword){
        console.log("IN IP PASSWORD EXIST BY ID::", newPassword);
        if (newPassword === "" || newPassword.length <= 0) {
            throw new NotFoundError("New password cannot be empty");
        }
        
        console.log("|in check for last 3 password for id::", id, "\n\n");
        console.log("|-",newPassword.length, newPassword)
        const result = await makeUserDb.GetPasswordById(id);
        console.log("RESULT::", result);
        

        if (result.length < 1) {
            return null;
        }

        // console.log("----->", await bcrypt.compare(newPassword,result[0].FIRST_PASSWORD))
        console.log("COMPARONG PASSWORD::", await bcrypt.compare(newPassword,result[0].FIRST_PASSWORD), await bcrypt.compare(newPassword,result[0].SECOND_PASSWORD), await bcrypt.compare(newPassword,result[0].THIRD_PASSWORD));
        // comparing new password with last three password  
        if( await bcrypt.compare(newPassword,result[0].FIRST_PASSWORD)  ||
            await bcrypt.compare(newPassword,result[0].SECOND_PASSWORD) || 
            await bcrypt.compare(newPassword,result[0].THIRD_PASSWORD)) 
            {
                // console.log("in error thrower:::")
                await makeAuditDb.UserAudit({Id:id,Type:"Change Password",Effect:"New Password should not be similiar to last 3 passwords",Status:0});
                throw new NotFoundError('New Password should not be similiar to last 3 passwords')
            } else {
                return null;
            }
    }  
}






module.exports = makeChangePassword