
const {headers}=require('../../config/config')

function AddRoleController({makeAddRole}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest
        await makeAddRole(body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Role successfully added!'
            }
        }
    }
}

module.exports=AddRoleController