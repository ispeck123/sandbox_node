function makeGetSubordinatePermissions({makePermissionDb}) {
    return async function getPermissionById(id) { 
        return await makePermissionDb.getSubordinatePermissions(id)
    }   
}

module.exports=makeGetSubordinatePermissions