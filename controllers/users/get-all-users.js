
const {headers}=require('../../config/config')
const auth=require('../../auth/db')
function GetUserController({makeGetAllUser}){
    
    return async function handle(httpRequest){
      
        const {body}=httpRequest        
        const result=await makeGetAllUser(body)
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

module.exports=GetUserController