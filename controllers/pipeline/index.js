
const GetPipelineController=require('./get-pipeline')()
const GetPipelineTypesController=require('./get-pipelineTypes')()
const AddPipelineController=require('./add-pipeline')()
const UpdatePipelineController=require('./update-pipeline')()
const AttachPipelineModelController=require('./attach-pipeline-model')()
const GetPipelineModelTypeController=require('./get-pipeline-model-type')()
const DeleteModelFromPipelineController = require("./delete-model-from-pipeline")()
const DeletePipelineController = require("./delete-pipeline")()
const UpdateModelPipelineController = require("./pipeline-update-model")()

module.exports={    
    AddPipelineController,
    UpdatePipelineController,
    GetPipelineController,
    GetPipelineTypesController,
    AttachPipelineModelController,
    GetPipelineModelTypeController, 
    DeleteModelFromPipelineController, 
    DeletePipelineController, 
    UpdateModelPipelineController
}