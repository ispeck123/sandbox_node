
const {UserPermissions} = require('../../entities/index')
const spgenerator=require("../../function/common-function");

function MakeUpdatedaUserPermission({makePermissionDb}) {
    return async function updateUserPermission(userpermissionInfo) { 
        const permissions = await UserPermissions(userpermissionInfo)

          if(permissions.gettype()=="permission"){
          /*  return await makePermissionDb.UpdateUserPer({
                userid:permissions.getuserid(),
                perid:permissions.getroleperid()
               }) */
               let pobj = {
                sql: spgenerator.spCallGenarator("updateUserRoleOrPermissions", 1),
                sqlvalue: [JSON.stringify(userpermissionInfo)]
              };
        return await makePermissionDb.getDataNoArgument(pobj);
        }
        else{
            return await makePermissionDb.UpdateRole({
                userid:permissions.getuserid(),
                roleid:permissions.getroleperid()
               }) 
        }
              
      
    }
    
}


module.exports = MakeUpdatedaUserPermission