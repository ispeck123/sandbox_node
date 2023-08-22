

const {makeAddPermission,
        makeGetAllPermission,
        makeUpdatePermission,
        makeAddUserPermission,
        makeGetUserPermission,
        makeUpdateUserPermission,
        makeRolePermissionMap,
        makeGetPermissionById, makeGetSubordinatePermissions}=require('../../use-cases/permission/index')



const AddPermissionsController=require('./add-permission')({makeAddPermission})
const GetPermissionsController=require('./get-permission')({makeGetAllPermission})
const UpdatePermissionsController=require('./update-permission')({makeUpdatePermission})
const AddUserPermissionsController=require('./add-user-permission')({makeAddUserPermission})
const GetUserPermissionsController=require('./get-user-permission')({makeGetUserPermission})
const UpdateUserPermissionsController=require('./update-user-permission')({makeUpdateUserPermission})
const GetRolePermissionMapController=require('./role-permission-map')({makeRolePermissionMap})
const GetPermissionByIdController=require('./get-permission-byid')({makeGetPermissionById})
const GetSubordinatePermission = require("./get-subordinate-permissions")({makeGetSubordinatePermissions})

module.exports={
    AddPermissionsController,
    GetPermissionsController,
    UpdatePermissionsController,
    GetPermissionByIdController,
    AddUserPermissionsController,
    GetUserPermissionsController,
    UpdateUserPermissionsController,
    GetRolePermissionMapController, 
    GetSubordinatePermission
}