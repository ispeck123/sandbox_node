
function makeGetPermissionById({makePermissionDb}) {
    return async function getPermissionById(id) { 
        return await makePermissionDb.GetById(id)
    }   
}

module.exports=makeGetPermissionById