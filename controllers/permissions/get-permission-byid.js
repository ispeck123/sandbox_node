const {headers} =require('../../config/config')

function GetPermissionByIdController({makeGetPermissionById}){
    return async function handle(httpRequest){
        const {id}=httpRequest.params;

        const result =await makeGetPermissionById(id)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Success',
                data: result
            }
        }

    }
}
    
module.exports = GetPermissionByIdController
