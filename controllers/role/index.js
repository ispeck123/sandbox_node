

const {makeAddRole,makeGetAllRole,makeUpdateRole,makeGetRole}=require('../../use-cases/role/index')



const AddRoleController=require('./add-role')({makeAddRole})
const GetRoleController=require('./get-role')({makeGetAllRole})
const UpdateRoleController=require('./update-role')({makeUpdateRole})
const GetRoleByIdController=require('./get-role-by-id')({makeGetRole})


module.exports={
    AddRoleController,
    GetRoleController,
    UpdateRoleController,
    GetRoleByIdController
}