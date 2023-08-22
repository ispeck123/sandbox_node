const {headers}=require('../../config/config')

function UpdatePermissionsController({makeUpdatePermission}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const {id}=params

        await makeUpdatePermission(id,body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Permission Updated Successfully!'
            }
        }
    }
}

module.exports=UpdatePermissionsController