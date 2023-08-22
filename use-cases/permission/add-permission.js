const {Permissions} = require('../../entities/index')


function makeAddUserPermission({makePermissionDb}){
    return async function addPermission(permissionInfo) {
        const permissions = await Permissions(permissionInfo)
           return await makePermissionDb.Insert({
            PERNAME:permissions.getPER_NAME(),
            PERDESC:permissions.getPER_DESC()
           })       
        
    }

}
module.exports = makeAddUserPermission