
const {headers}=require('../../config/config')

function AddPermissionsController({makeAddPermission}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest
        await makeAddPermission(body)

        return{
            headers,
            statusCode:200,
            body:{
                message:'Permission successfully added!'
            }
        }
    }
}

module.exports=AddPermissionsController