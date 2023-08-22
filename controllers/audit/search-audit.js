
const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');


function SearchAuditLogController({makeSearchAudit}){
    
    return async function handle(httpRequest){        
        var count;
         const body=httpRequest.headers
         if(httpRequest.headers.id)
            count = await makeAuditDb.GetAuditCount({fromdate:"",todate:"",username: "",id:httpRequest.headers.id,data:httpRequest.headers.inputdata});
         else
            count = await makeAuditDb.GetAuditCount({fromdate:"",todate:"",username: "",id:null,data:httpRequest.headers.inputdata});

        console.log("----->>>>>\n\n\n", count, httpRequest.headers.inputdata);
        const result=await makeSearchAudit(body)
        console.log("controller",body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data : result,
                totalCount : count[0]
            }
        }
    }
}

module.exports=SearchAuditLogController