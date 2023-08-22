const {Audit} = require('../../entities/index')


function makePerFilterAudit({makeAuditDb}){
    return async function perFilterAudit(AuditInfo) {
        var frmdate,todate;
        if(AuditInfo.fromdate==0)
         frmdate =1;
        else
        frmdate =AuditInfo.fromdate;

          if(AuditInfo.todate==0)
            todate =1;
         else
         todate=AuditInfo.todate;

        console.log("use-case",AuditInfo);
        if(AuditInfo.id)
        
            return await makeAuditDb.GetAuditFilter({
                fromdate:frmdate,
                todate:todate,
                event:AuditInfo.event,
                username:AuditInfo.username,
                id:AuditInfo.id,
                pageNo:AuditInfo.pageNo,noOfItems:AuditInfo.noOfItems})
        
        else
        
            return await makeAuditDb.GetAuditFilter({
                fromdate:frmdate,
                todate:todate,
                event:AuditInfo.event,
                username:AuditInfo.username,
                id:null,
                pageNo:AuditInfo.pageNo,noOfItems:AuditInfo.noOfItems})
        
          
    }

}
module.exports = makePerFilterAudit