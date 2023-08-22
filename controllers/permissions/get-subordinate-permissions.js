
const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');

function GetSubordinatePermission({makeGetSubordinatePermissions}){
    
    return async function handle(httpRequest){
        const {params}=httpRequest        
        console.log("fetching subordinate permissions for :: ", params.permission_id);
        const result=await makeGetSubordinatePermissions(params.permission_id);
        console.log(result);

        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data: result
            }
        }
    }
}

module.exports=GetSubordinatePermission