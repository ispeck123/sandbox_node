const {UserPermissions} = require('../../entities/index')
const spgenerator=require("../../function/common-function");


function makeAddUserPermission({makePermissionDb}){
    return async function addUserPermission(userpermissionInfo) {
        const permissions = await UserPermissions(userpermissionInfo)
        if(permissions.gettype()=="permission"){
            /*return await makePermissionDb.InsertPer({
                userid:permissions.getuserid(),
                perid:permissions.getroleperid()
               }) */
               let pobj = {
                sql: spgenerator.spCallGenarator("assignUserRoleOrPermissions", 1),
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
module.exports = makeAddUserPermission