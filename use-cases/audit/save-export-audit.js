function makeSaveExportAuditDb({makeAuditDb}) {
    return async function getUserAudit(exportInfo) { 
        console.log("cont", exportInfo)
        return await makeAuditDb.SaveExportAuditRecord(exportInfo.type, exportInfo.filename, exportInfo.creation_date, exportInfo.fromdate, exportInfo.todate, exportInfo.keyword, exportInfo.status)
    }
}

module.exports=makeSaveExportAuditDb