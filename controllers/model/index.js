
const GetModelController=require('./get-models')()
const AddModelController=require('./add-models')()
const UpdateModelController=require('./update-models')()
const GetModelCategoryController=require('./get-model-category')()
const GetModelTypeController=require('./get-model-type')()
const AddmodelToClassController=require('./add-model-class')()
const GetModelByPipelineController=require('./get-model-byPipeline')()
const ModelVerifyController=require('./model-verify')()
const ModelRegisterController=require('./model-register')()
const DeleteModelController = require("./delete-model")()
const GetModelTypeBymodelCatController = require("./get-model-type-by-model-cat")()
const GetFrameworklistController = require("./get-framework-list")()

module.exports={   
    AddModelController,
    UpdateModelController, 
    GetModelController,
    GetModelCategoryController,
    GetModelTypeController,
    AddmodelToClassController,
    GetModelByPipelineController,
    ModelVerifyController,
    ModelRegisterController, 
    DeleteModelController,
    GetModelTypeBymodelCatController,
    GetFrameworklistController
}