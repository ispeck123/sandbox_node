
const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');


function FilterAuditLogController({makeFilterAudit}){
    
    return async function handle(httpRequest) {        
       var result;
       var count;
        console.log("\n\n\n------------>>>>>", httpRequest.body);
       if(httpRequest.headers.id)
         {
            const {body}=httpRequest;
            var newbody=({...body,'id':parseInt(httpRequest.headers.id),'pageNo':parseInt(httpRequest.headers.pageno),
            'noOfItems':parseInt(httpRequest.headers.noofitems)});
            count = await makeAuditDb.GetAuditCount({fromdate:httpRequest.body.fromdate,todate:httpRequest.body.todate,username:httpRequest.body.username,id:httpRequest.headers.id,data:""});

            result=await makeFilterAudit(newbody);
         }
         else
         {
            const {body}=httpRequest;
            console.log("controller",body)
            var newbody=({...body,'pageNo':parseInt(httpRequest.headers.pageno),
            'noOfItems':parseInt(httpRequest.headers.noofitems)});
            count = await makeAuditDb.GetAuditCount({fromdate:httpRequest.body.fromdate,todate:httpRequest.body.todate,username:httpRequest.body.username,id: null,data:""});

            result=await makeFilterAudit(newbody)
            console.log("controller",result)

         }

        console.log("controller",result)
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data :result,
                totalCount : count[0]
            }
        }
    }
}

module.exports=FilterAuditLogController