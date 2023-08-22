const {makeAuditDb}=require('../../data-access/index')

const makeUserAudit=require('./user-audit')({makeAuditDb})
const makeGetUserAudit=require('./get-user-audit')({makeAuditDb})
const makeSearchAudit=require('./search-audit')({makeAuditDb})
const makeFilterAudit=require('./filter-audit')({makeAuditDb})
const makeEventAudit=require('./event-audit')({makeAuditDb})
const makeExportAuditLogs=require("./export-audit")({makeAuditDb})
const makeSaveExportAuditDb=require("./save-export-audit")({makeAuditDb})
const makeGetExportsList=require("./get-exports-list")({makeAuditDb})

module.exports=Object.freeze({
    makeUserAudit,
    makeGetUserAudit,
    makeSearchAudit,
    makeFilterAudit,
    makeEventAudit, 
    makeExportAuditLogs, 
    makeSaveExportAuditDb, 
    makeGetExportsList
})