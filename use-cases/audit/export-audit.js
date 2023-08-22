const spgenerator = require("../../function/common-function");

function makeExportAuditLogs({ makeAuditDb }) {
    return async function getExportAuditLogs(data) {
        console.log("use case")
        let pobj = {
            sql: spgenerator.spCallGenarator("getExportData", 1),
            sqlvalue: [JSON.stringify(data)]
        };
        return await makeAuditDb.getExportAuditLogs(pobj);
    }
}

module.exports = makeExportAuditLogs