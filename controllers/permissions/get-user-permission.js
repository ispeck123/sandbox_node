
const {headers}=require('../../config/config')
function GetUserPermissionsController({makeGetUserPermission}){
    
    return async function handle(httpRequest){
       
        //const {body}=httpRequest    
        const {id}=httpRequest.params   
        const result=await makeGetUserPermission(id)
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

module.exports=GetUserPermissionsController