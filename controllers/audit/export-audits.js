const { headers } = require('../../config/config')
const { generatePDF } = require("../../function/pdfGenerator");

function ExportAuditLogsController({makeExportAuditLogs, makeSaveExportAuditDb}) {
    return async function handle(httpRequest) {
        console.log("\n\n\n------------>>>>>", httpRequest.body);
        let { fromdate, todate, keyword, userid } = httpRequest.body;
        fromdate = Math.floor(fromdate);
        todate = Math.floor(todate);
        console.log("Filter:: ", fromdate, todate);
        const auditresult = await makeExportAuditLogs({fromdate, todate, keyword, userid});
        // console.log(auditresult[0]);

        const filename = Date.now().toString().concat(".pdf");
        const creation_date = new Date().toLocaleDateString('zh-Hans-CN').replaceAll("/", "-");
        const saveResult = await makeSaveExportAuditDb({type:"save", filename, creation_date, fromdate, todate, keyword, status:0});
        // console.log("File Exporting Entered into database:: ", saveResult);

        const dataToBeExported = JSON.parse(JSON.stringify(auditresult));
        // console.log("data to:: ", dataToBeExported);
        // console.log("Data To be exported:: ", dataToBeExported)
        let responseBody = {};
        if (dataToBeExported[0].length > 0) {
            generatePDF(filename, dataToBeExported[0], makeSaveExportAuditDb);
            console.log("\n\n\nin main function again");
        } else {
            console.log("nothing to export");
            responseBody = {
                response: "success", 
                message: "nothign to export"
            }
        }

        return {
            headers,
            statusCode: 200,
            body: {
                response: "success", 
                msg: "file under process"
            }
        }
    }
}

module.exports = ExportAuditLogsController