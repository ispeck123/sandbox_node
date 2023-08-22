function makeGetExportsList({makeAuditDb}) {
    return async function getExportsList() { 
        console.log("in use cases of getexportslist");
        return await makeAuditDb.getExportsList();
    }   
}

module.exports=makeGetExportsList