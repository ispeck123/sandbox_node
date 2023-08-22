

const {makeUserDb,makeUserRoleDb,makeRoleDb}=require('../../data-access/index')



const makeAddUser=require('./add-user')({makeUserDb})
const makeAddUserWithSingleRole=require('./add-user-with-single-role')({makeUserDb,makeRoleDb,makeUserRoleDb})
const makeAddUserWithMultiRoles=require('./add-user-with-multi-roles')({makeUserDb,makeRoleDb,makeUserRoleDb})
const makeGetAllUser=require('./get-all-users')({makeUserDb})
const makeGetUser=require('./get-users')({makeUserDb})
const makeGetById=require('./get-by-id-user')({makeUserDb})
const makeGetByIdpassword=require('./get-by-id-password-user.js')({makeUserDb})
const makeDeleteUser=require('./delete-user')({makeUserDb})
const makeUpdateUser=require('./update-user')({makeUserDb})
const makeResetPassword=require('./reset-password')()
const makeResetPasswordByUser=require('./reset-password-byuser')()
const makeChangePassword=require('./change-passord')()
const makeCheckToken=require('./check-token')()


module.exports=Object.freeze({
    makeGetAllUser, 
    makeGetUser, //user list
    makeGetById,  //user details
    makeGetByIdpassword, //user login
    makeAddUser,     //add user
    makeAddUserWithSingleRole,
    makeAddUserWithMultiRoles,
    makeDeleteUser,
    makeUpdateUser,  //user update
    makeResetPassword,
    makeResetPasswordByUser,
    makeChangePassword,
    makeCheckToken
})