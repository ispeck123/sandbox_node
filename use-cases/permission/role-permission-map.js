
const spgenerator=require("../../function/common-function");

function makeRolePermissionMap({makePermissionDb}) {
    return async function getRolePermissionMap() { 

    //     let pobj = {
    //         sql: spgenerator.spCallGenarator("getRolePermission", 0),
    //         sqlvalue: []
    //       };
    // return await makePermissionDb.getDataNoArgument(pobj);
       return await makePermissionDb.GetUSERPERNAME()
    }   
}

module.exports=makeRolePermissionMap