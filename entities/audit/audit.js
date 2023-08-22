
function BuildMakeAudit() {
    return function makeAudit({
        Id,
        Type,
        Effect,
        Status
    } = {}) {
        
       
            
        return Object.freeze({
           getAuditId:()=>Id,
           getAuditType:()=>Type,
           getAuditEfffect:()=>Effect,
           getAuditStatus:()=>Status
        })

    }
}


module.exports = BuildMakeAudit