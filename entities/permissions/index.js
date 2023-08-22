let Validate=require('../../core/validation/validate')
const makePermission=require('./permission')
const makeUserPermission=require('./userpermission')
const Permission=makePermission({Validate})
const UserPermission=makeUserPermission({Validate})
module.exports=Permission