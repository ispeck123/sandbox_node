const {Audit} = require('../../entities/index')


function makePerUserAudit({makeAuditDb}){
    return async function perUserAudit(AuditInfo) {
        console.log("use-case");

        const audits = await Audit(AuditInfo);
           return await makeAuditDb.UserAudit({
            Id:audits.getAuditId(),
            Type:audits.getAuditType(),
            Effect:audits.getAuditEfffect(),
            Status:audits.getAuditStatus()
           })       
        
    }

}
module.exports = makePerUserAudit