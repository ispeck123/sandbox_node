
const GetClassController=require('./get-class')()
const AddClassController=require('./add-class')()
const UpdateClassController=require('./update-class')()
const GetClassByModelController=require('./get-class-byModel')()
const DeleteClassByIdController=require('./delete-class')()

module.exports={    
    GetClassController,
    AddClassController,
    UpdateClassController,
    GetClassByModelController,
    DeleteClassByIdController
   
}