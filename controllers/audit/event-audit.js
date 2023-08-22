
const {headers}=require('../../config/config')


function EventAuditLogController({makeEventAudit}){
    
    return async function handle(httpRequest){        
    
         const {body}=httpRequest

        const result=await makeEventAudit()
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data :result,
            }
        }
    }
}

module.exports=EventAuditLogController