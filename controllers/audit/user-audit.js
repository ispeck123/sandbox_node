
const {headers}=require('../../config/config')


function AddUserAuditLogController({makeUserAudit}){
    
    return async function handle(httpRequest){        

        
        const {body}=httpRequest
        console.log(body)

        await makeUserAudit(body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'success'

            }
        }
    }
}

module.exports=AddUserAuditLogController