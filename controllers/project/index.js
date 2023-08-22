//const {getProducts,addProduct,updateProduct,deleteProduct,getProductsSuppliers}=require('../../use-cases/product/index')


const GetProjectTypeController=require('./get-projecttype')()

const GetProjectsController=require('./get-projects')()
const AddProjectController=require('./add-project')()
const UpdateProjectController=require('./update-project')()
const ProjectDeployController=require('./project-deploy')()
const ProjectExecuteStartController=require('./project-execute-start')()
const ProjectExecuteStopController=require('./project-execute-stop')()
const ProjectExecuteLogController=require('./project-execute-log')()
const ProjectExecuteStatusController=require('./project-execute-status')()
const GetProjectsByPipelineId = require("./get-project-byPipeline")()
const DeleteSourceFromProject = require("./delete-sourceFrom-project")()
const ProjectSourceMap = require("./map-sourceTo-project")()
const DeleteProjectController = require("./delete-project")()

module.exports={
    GetProjectTypeController,
    GetProjectsController,
    AddProjectController,
    UpdateProjectController,
    ProjectDeployController,
    ProjectExecuteStartController,
    ProjectExecuteStopController,
    ProjectExecuteLogController,
    ProjectExecuteStatusController, 
    GetProjectsByPipelineId, 
    DeleteSourceFromProject, 
    ProjectSourceMap, 
    DeleteProjectController
}






