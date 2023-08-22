
const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');

function GetUserAuditController({makeGetUserAudit}){
    
    return async function handle(httpRequest){
        //const {headers}=httpRequest
                //console.log(headers["authorization"])
                //auth.validateToken()
        var count;
        const {body}=httpRequest
        console.log(httpRequest.headers)

        if(httpRequest.headers.id)
           count = await makeAuditDb.GetAuditCount({fromdate:"",todate:"",username: "",id:httpRequest.headers.id,data:""});
        else
           count = await makeAuditDb.GetAuditCount({fromdate:"",todate:"",username: "",id:null,data:""});

        const result=await makeGetUserAudit(httpRequest.headers)
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:result,
                totalCount : count[0]
            }
        }
    }
}

module.exports=GetUserAuditController