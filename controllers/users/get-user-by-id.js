
const {headers}=require('../../config/config')
const auth=require('../../auth/db')
const {makeAuditDb}=require('../../data-access/index');

function GetUserByIdController({makeGetById}){
    
    return async function handle(httpRequest){
        //const {headers}=httpRequest
                //console.log(headers["authorization"])
                //auth.validateToken()
        const {body}=httpRequest    
        const {id}=httpRequest.params
        const result=await makeGetById(id)
        console.log("makeGetById",result)
        var effect;
        var status;
        if (result != undefined || result != null || result != "")
        {
            effect="User data received successfully";
            status = 1;
            console.log("User data received successfully");
        }
        else
        {
            effect="User data not received";
            status = 0;
        }
        //await makeAuditDb.UserAudit({Id:id,Type:"Getting userdata by Id",Effect:effect,Status:status});

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

module.exports=GetUserByIdController