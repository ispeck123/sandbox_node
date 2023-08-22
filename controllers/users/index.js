

const {makeAddUser,makeGetByIdpassword,makeGetAllUser,makeGetById,makeUpdateUser,
    makeResetPassword,makeResetPasswordByUser,makeChangePassword,makeCheckToken,makeGetUser}=require('../../use-cases/user/index')


const UserLoginController=require('./user-login')({makeGetByIdpassword})
const AddUserController=require('./add-user')({makeAddUser})
const GetUserController=require('./get-user')({makeGetUser})
const GetAllUserController=require('./get-all-users')({makeGetAllUser})
const GetUserByIdController=require('./get-user-by-id')({makeGetById})
const UpdateUserController=require('./update-user')({makeUpdateUser})
const ResetPasswordController=require('./reset-password')({makeResetPassword})
const ResetPasswordByUserController=require('./reset-password-byuser')({makeResetPasswordByUser})
const ChangePasswordController=require('./change-password')({makeChangePassword})
const CheckTokenController=require('./check-token')({makeCheckToken})


module.exports={
    AddUserController,
    UserLoginController,
    GetUserController,
    GetAllUserController,
    GetUserByIdController,
    UpdateUserController,
    ResetPasswordController,
    ResetPasswordByUserController,
    ChangePasswordController,
    CheckTokenController
}