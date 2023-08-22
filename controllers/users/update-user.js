const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');

function UpdateUserController({makeUpdateUser}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const {id}=params

        await makeUpdateUser(id,body)
        await makeAuditDb.UserAudit({Id:id,Type:"Update User",Effect:"User Updated Successfully",Status:1});

        return{
            headers,
            statusCode:200,
            body:{
                message:'User Details Updated Successfully!'
            }
        }
    }
}

module.exports=UpdateUserController