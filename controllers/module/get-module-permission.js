
const {headers}=require('../../config/config')

function GetModulePermissionController({makeGetModulePermission}){
    
    return async function handle(httpRequest){
       console.log("contrt")
        const {body}=httpRequest        
        const {hashid}=httpRequest.params
        const result=await makeGetModulePermission(hashid)
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

module.exports=GetModulePermissionController