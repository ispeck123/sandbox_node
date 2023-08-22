const { fork } = require("child_process");

exports.generatePDF = async (filename, json, saveExportToDb) => {
    const childProcess = fork(__dirname.concat("/pdfProcessor.js"));
    childProcess.send({
        filename, json
    });

    childProcess.on("message", async (message) => {
        if (message.type === "complete") {
            console.log("file export completed, changing status to complete for ", filename);
            const updateExportDbResult = await saveExportToDb({type:"update", filename});
            console.log("updated export completion to db:: ", updateExportDbResult);
        } else {
            console.log("failed to export and not changing the status of file:: ");
        }
    });
}

