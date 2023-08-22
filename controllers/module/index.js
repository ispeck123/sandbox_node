

const {makeAddModule,makeGetAllModule,makeGetModulePermission,makeUpdateModule,makeGetModule}=require('../../use-cases/module/index')

const AddModuleController=require('./add-module')({makeAddModule})
const GetModuleController=require('./get-module')({makeGetAllModule})
const GetModulePermissionController=require('./get-module-permission')({makeGetModulePermission})
const UpdateModuleController=require('./update-module')({makeUpdateModule})
const GetModuleByIdController=require('./get-module-byid')({makeGetModule})

module.exports={   
    AddModuleController,
    GetModuleController,
    GetModulePermissionController,
    UpdateModuleController,
    GetModuleByIdController
}