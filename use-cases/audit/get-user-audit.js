function makeGetUserAudit({makeAuditDb}) {
    return async function getUserAudit(auditval) { 
        console.log("cont",auditval)

        if(auditval.id)
        return await makeAuditDb.GetAuditLog(auditval.id,auditval.pageno,auditval.noofitems)
        else
        return await makeAuditDb.GetAuditLog(null,auditval.pageno,auditval.noofitems)
    }   
}

module.exports=makeGetUserAudit