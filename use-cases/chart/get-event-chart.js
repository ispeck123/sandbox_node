
const spgenerator=require("../../function/common-function");

function makeGetEventChart({makeAuditDb}) {
    return async function getEventChart(data) {
        console.log("use case")
        let pobj = {
            sql: spgenerator.spCallGenarator("getEventGraph", 1),
            sqlvalue: [JSON.stringify(data)]
          };
        return await makeAuditDb.getDataNoArgument(pobj);
    
    //     if(eventval.id)
    //     return await makeAuditDb.EventGraph(eventval.id,data.from_date,data.to_date,data.user)
    //     else  if(eventval.id==null || eventval.id=="null" || eventval.id=="undefined" || eventval.id=="")
    //     {
    //         console.log("null")
    //         if(data.user=="All")
    //         {
    //             let pobj = {
    //                 sql: spgenerator.spCallGenarator("getEventGraph", 1),
    //                 sqlvalue: [JSON.stringify(data)]
    //               };
    //             return await makeAuditDb.getDataNoArgument(pobj);
    //         }
    //         else
    //     return await makeAuditDb.EventGraph(null,data.from_date,data.to_date,data.user)
    // }   
    }   
}

module.exports=makeGetEventChart