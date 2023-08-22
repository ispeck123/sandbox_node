
function MakeGetAllPermission({makePermissionDb}) {
    return async function getAllPermission() { 
        return await makePermissionDb.GetAll()
    }   
}

module.exports=MakeGetAllPermission