const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');

function UpdateUserController({makeUpdateUser}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const {id}=params
        console.log("id", id)
        console.log("body", body)

        if (id == undefined || id == null){
            return{
                headers,
                statusCode:404,
                body:{
                    message:'User Id is empty or invalid!'
                }
            }
        } else if (body == undefined || body == null){
            return{
                headers,
                statusCode:404,
                body:{
                    message:'User Details is empty!'
                }
            }
        }
        await makeUpdateUser(id,body)
        //await makeAuditDb.UserAudit({Id:id,Type:"Update User",Effect:"User Updated Successfully",Status:1});

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