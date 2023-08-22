const {Audit} = require('../../entities/index')


function makePerSearchAudit({makeAuditDb}){
    return async function perUserAudit(AuditInfo) {
        console.log("use-case",AuditInfo);
        if(AuditInfo.id)
            return await makeAuditDb.GetAuditSearch(AuditInfo.inputdata,AuditInfo.id,AuditInfo.pageno,AuditInfo.noofitems)
            else
            return await makeAuditDb.GetAuditSearch(AuditInfo.inputdata,null,AuditInfo.pageno,AuditInfo.noofitems)
    }

}
module.exports = makePerSearchAudit