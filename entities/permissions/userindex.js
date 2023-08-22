let Validate=require('../../core/validation/validate')

const makeUserPermission=require('./userpermission')

const UserPermission=makeUserPermission({Validate})
module.exports=UserPermission