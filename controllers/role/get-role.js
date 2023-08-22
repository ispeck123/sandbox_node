
const {headers}=require('../../config/config')
function GetRoleController({makeGetAllRole}){
    
    return async function handle(httpRequest){
       
        const {body}=httpRequest        
        const result=await makeGetAllRole(body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:result
            }
        }
    }
}

module.exports=GetRoleController