const {headers}=require('../../config/config')

function UpdateRoleController({makeUpdateRole}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const {id}=params

        await makeUpdateRole(id,body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Role Updated Successfully!'
            }
        }
    }
}

module.exports=UpdateRoleController