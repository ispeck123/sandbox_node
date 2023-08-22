
const spgenerator=require("../../function/common-function");

function makeGetEventChartFailure({makeAuditDb}) {
    return async function getEventChartFailure(data) { 
        console.log("use case")
        let pobj = {
            sql: spgenerator.spCallGenarator("getEventFailureGraph", 1),
            sqlvalue: [JSON.stringify(data)]
          };
        return await makeAuditDb.getDataNoArgument(pobj);
    //     if(eventfval.id)
    //     return await makeAuditDb.EventGraphFailure(eventfval.id,data.from_date,data.to_date,data.user)
    //     else if(eventfval.id==null || eventfval.id=="null" || eventfval.id=="undefined" || eventfval.id=="")
    //     {
    //         console.log("null")
    //         if(data.user=="All")
    //         {
                
    //         }
    //         else
    //     return await makeAuditDb.EventGraphFailure(null,data.from_date,data.to_date,data.user)
    // }   
    }   
}

module.exports=makeGetEventChartFailure