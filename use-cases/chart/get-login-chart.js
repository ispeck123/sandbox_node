
const spgenerator=require("../../function/common-function");

function makeGetLoginChart({makeAuditDb}) {
    return async function getLoginChar(data) { 
        console.log("use case",data)
      
        let pobj = {
            sql: spgenerator.spCallGenarator("getLoginGraph", 1),
            sqlvalue: [JSON.stringify(data)]
          };
        return await makeAuditDb.getDataNoArgument(pobj);

        // if(val.id)
        //     return await makeAuditDb.LoginGraph(val.id,data.from_date,data.to_date,data.user)
        // else if(val.id==null || val.id=="null" || val.id=="undefined" || val.id=="")
        // {
        //     console.log("null")
        //     if(data.user=="All")
        //     {
               
        //     }
        //     else
        //     return await makeAuditDb.LoginGraph(null,data.from_date,data.to_date,data.user)

        // }
    }   
}

module.exports=makeGetLoginChart