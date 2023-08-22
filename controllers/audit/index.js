const {makeUserAudit,makeGetUserAudit,makeSearchAudit,makeFilterAudit,makeEventAudit, makeExportAuditLogs, makeSaveExportAuditDb, makeGetExportsList}=require('../../use-cases/audit/index')

const AddUserAuditLogController=require('./user-audit')({makeUserAudit})
const GetUserAuditLogController=require('./get-user-audit')({makeGetUserAudit})
const SearchAuditLogController=require('./search-audit')({makeSearchAudit})
const FilterAuditLogController=require('./filter-audit')({makeFilterAudit})
const EventAuditLogController=require('./event-audit')({makeEventAudit})
const ExportAuditLogsController = require("./export-audits")({makeExportAuditLogs, makeSaveExportAuditDb})
const GetExportsListController = require("./get-exports-list")({makeGetExportsList})

module.exports={    
    AddUserAuditLogController,
    GetUserAuditLogController,
    SearchAuditLogController,
    FilterAuditLogController,
    EventAuditLogController, 
    ExportAuditLogsController,
    GetExportsListController
}