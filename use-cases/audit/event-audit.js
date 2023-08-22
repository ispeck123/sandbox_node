function makeGetEventAudit({makeAuditDb}) {
    return async function getEventAudit() { 
        return await makeAuditDb.GetEvent()
    }   
}

module.exports=makeGetEventAudit