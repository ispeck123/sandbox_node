const {headers}=require('../../config/config')

function GetRoleByIdController({makeGetRole}){
    
    return async function handle(httpRequest){
        
        const {id}=httpRequest.params

        const result = await makeGetRole(id)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Success',
                data:result
            }
        }
    }
}

module.exports=GetRoleByIdController