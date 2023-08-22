
function makeGetModulePermission({makeModuleDb}) {
    return async function getAllModulePermission(hashid) { 
        console.log("use case")

        return await makeModuleDb.GetModulePermission(hashid)
    }   
}

module.exports=makeGetModulePermission