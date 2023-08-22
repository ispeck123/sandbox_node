
const spgenerator=require("../../function/common-function");

function makeGetLoginChartFailure({makeAuditDb}) {
    return async function getLoginChartFailure(data) { 
        console.log("use case")
        let pobj = {
            sql: spgenerator.spCallGenarator("getLoginFailureGraph", 1),
            sqlvalue: [JSON.stringify(data)]
          };
        return await makeAuditDb.getDataNoArgument(pobj);
    //     if(loginfval.id)
    //     return await makeAuditDb.LoginGraphFailure(loginfval.id,data.from_date,data.to_date,data.user)
    //     else  if(loginfval.id==null || loginfval.id=="null" || loginfval.id=="undefined" || loginfval.id=="")
    //     {
    //         console.log("null")
    //         if(data.user=="All")
    //         {
               
    //         }
    //         else
    //     return await makeAuditDb.LoginGraphFailure(null,data.from_date,data.to_date,data.user)
    // }   
    }   
}

module.exports=makeGetLoginChartFailure