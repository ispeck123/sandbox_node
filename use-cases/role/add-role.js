const {Role} = require('../../entities/index')


function MakeAddRole({makeRoleDb}){
    return async function addRole(roleInfo) {
        const role = await Role(roleInfo)
           return await makeRoleDb.Insert({
            RoleName:role.getRoleName(),
            RoleDesc:role.getRoleDesc()
           })       
        
    }

}
module.exports = MakeAddRole