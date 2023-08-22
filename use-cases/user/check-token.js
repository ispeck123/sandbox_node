
const {makeUserDb,makeAuditDb}=require('../../data-access/index');

function makeResetPasswordByUser() {
    return async function resetPasswordByUser(token) { 
        const res = await makeUserDb.GetToken({token:token})
        var Mesg = '';
        console.log(res[0]);
        if(res[0]=="undefined" || res[0]==undefined)
        {
            console.log("expired");
            //await makeAuditDb.UserAudit({Id:id,type:"Reset Password",effect:"Token time Expired",status:0});
            Mesg = 'expired';
        }  
        else if(res[0].TOKEN_STATUS == 1)
        {
            Mesg = 'notexpired';
        }
        return Mesg
     
    }

  
}






module.exports = makeResetPasswordByUser