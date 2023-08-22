
function makeAdminCheck({makeAuditDb}) {
    return async function getAdminCheck(val) { 
        console.log("use case")
       
        return await makeAuditDb.CheckAdmin(val)
    }   
}

module.exports=makeAdminCheck