
function makeGetUserPermission({makePermissionDb}) {
    return async function getUserPermission(id) { 
        return await makePermissionDb.GetUSERPER(id)
    }   
}

module.exports=makeGetUserPermission