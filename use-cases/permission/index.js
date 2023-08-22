

const {makePermissionDb}=require('../../data-access/index')



const makeAddPermission=require('./add-permission')({makePermissionDb})
const makeGetAllPermission=require('./get-all-permission')({makePermissionDb})
const makeUpdatePermission=require('./update-permission')({makePermissionDb})
const makeAddUserPermission=require('./add-user-permission')({makePermissionDb})
const makeGetUserPermission=require('./get-user-permission')({makePermissionDb})
const makeUpdateUserPermission=require('./update-user-permission')({makePermissionDb})
const makeRolePermissionMap=require('./role-permission-map')({makePermissionDb})
const makeGetPermissionById=require('./get-permission-byid')({makePermissionDb})
const makeGetSubordinatePermissions = require("./get-subordinate-permissions")({makePermissionDb});

module.exports=Object.freeze({
    makeAddPermission, 
    makeGetAllPermission, 
    makeUpdatePermission, 
    makeAddUserPermission,
    makeGetUserPermission,
    makeUpdateUserPermission,
    makeRolePermissionMap,
    makeGetPermissionById, 
    makeGetSubordinatePermissions
})