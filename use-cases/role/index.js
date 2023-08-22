

const {makeRoleDb}=require('../../data-access/index')



const makeAddRole=require('./add-role')({makeRoleDb})
const makeGetAllRole=require('./get-all-role')({makeRoleDb})
const makeUpdateRole=require('./update-role')({makeRoleDb})
const makeGetRole=require('./get-role-by-id')({makeRoleDb})


module.exports=Object.freeze({
    makeAddRole, 
    makeGetAllRole, 
    makeUpdateRole, 
    makeGetRole
})