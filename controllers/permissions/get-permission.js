
const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');

function GetPermissionsController({makeGetAllPermission}){
    
    return async function handle(httpRequest){
       
        const {body}=httpRequest        
        const result=await makeGetAllPermission(body)
     //   await makeAuditDb.UserAudit({Id:user_id[0].USER_ID,type:"Get Permission",effect:effect,status:status});

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

module.exports=GetPermissionsController