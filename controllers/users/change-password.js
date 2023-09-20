const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');

function ChangePasswordController({makeChangePassword}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const {id}=params
        console.log("Changing password for id::", id);

        await makeChangePassword(id,body);
        //await makeAuditDb.UserAudit({Id:id,Type:"Change Password",Effect:"Password Changed Successfully",Status:1});

        return{
            headers,
            statusCode:200,
            body:{
                message:'Password Changed Successfully!'
            }
        }
    }
}

module.exports=ChangePasswordController