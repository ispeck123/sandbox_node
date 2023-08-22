const express=require('express');
const auth=require('./auth/db');
const cors=require('cors');
const app=express();
const bodyparser=require('body-parser');
const start_server = require('./function/server-start');
//const env=require('dotenv')
//const directoryName=__dirname
/*env.config({
    path:`${directoryName}/config/.env`
})*/

app.use(express.static(__dirname.concat("/download")));

const {
    RootController,
    GetProductController,
    GetProductSupplierController,
    NotFoundController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    AddUserController,
    UserLoginController,
    GetUserController,
    GetAllUserController,
    GetUserByIdController,
    UpdateUserController,
    AddRoleController,
    GetRoleController,
    UpdateRoleController,
    GetRoleByIdController,
    AddPermissionsController,
    GetPermissionsController,
    UpdatePermissionsController,
    GetPermissionByIdController,
    AddUserPermissionsController,
    UpdateUserPermissionsController,
    GetUserPermissionsController,
    GetRolePermissionMapController,
    GetSubordinatePermission, 
    GetProjectTypeController,
    GetProjectsController,
    AddProjectController,
    UpdateProjectController,
    ProjectDeployController,
    ProjectExecuteStopController,
    ProjectExecuteStartController,
    ProjectExecuteLogController,
    ProjectExecuteStatusController,
    GetProjectsByPipelineId, 
    DeleteProjectController, 
    DeleteSourceFromProject, 
    ProjectSourceMap, 
    GetModelController,
    AddModelController,
    UpdateModelController,
    DeleteModelController, 
    GetPipelineController,
    GetPipelineTypesController,
    AddPipelineController,
    AttachPipelineModelController,
    UpdatePipelineController,
    UpdateModelPipelineController, 
    GetPipelineModelTypeController,
    DeleteModelFromPipelineController, 
    DeletePipelineController,
    GetAlgorithmController,
    GetFrameworkController,
    GetClassController,
    AddClassController,
    UpdateClassController,
    DeleteClassByIdController,
    AddClassAttributeController,
    UpdateClassAttributeController,
    AddClassAttributeValueController,
    DeleteClassAttributeByIdController,
    UpdateClassAttributeValueController,
    DeleteClassAttributeValueByIdController,
    GetClassAttributeDatatypeController,
    GetClassByModelController,
    AddmodelToClassController,
    GetModelByPipelineController,
    ModelVerifyController,
    ModelRegisterController,
    GetProcessingController,
    GetAreaController,
    GetSourceController,
    AddSourceController,
    AddSourceFileUploadController,
    GetSourceLocationController,
    UpdateSourceController,
    GetSourceFileDownloadController,
    UpdateSourceFileMapController,
    AddAlarmController,
    GetAlarmController,
    GetAlarmCategoryController,
    UpdateAlarmController,
    GetModelCategoryController,
    GetModelTypeController,
    AddZoneController,
    UpdateZoneController,
    GetZoneController,
    GetSourceFileListController,
    GetArtifactsTypeController,
    GetArtifactWeightController,
    GetArtifactRetrieveController,
    AddArtifactStoreController,
    AddArtifactWeightStoreController,
    GetArtifactController,
    UpdateArtifacController, 
    AddModuleController,
    GetModuleController,
    GetModulePermissionController,
    UpdateModuleController,
    GetModuleByIdController,
    ResetPasswordController,
    ResetPasswordByUserController,
    ChangePasswordController,
    AddUserAuditLogController,
    GetUserAuditLogController,
    SearchAuditLogController,
    FilterAuditLogController,
    EventAuditLogController,
    GetExportsListController,  
    ExportAuditLogsController, 
    CheckTokenController,
    ServerUsageController,
    GpuUsageController,
    LoginAuditChartController,
    EventAuditChartController,
    LoginFailureAuditChartController,
    EventFailureAuditChartController,
    AdminCheckController,
    ProcessController, 
    GetModelTypeBymodelCatController,
    GetFrameworklistController,
    GetSourceFileListConditionController,
    GetProjectTypeDataController
}=require('./controllers/index')


const ControllerCallback=require('./frameworks/web/express/controller-callback')
const DownloadController = require("./frameworks/web/express/downloadController");
const ControllerFormDataCallback=require('./frameworks/web/express/controller-callback-formdata');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
//app.use(auth.generateAccessToken);
app.get('/',ControllerCallback(RootController));
app.get('/products',ControllerCallback(GetProductController));
app.get('/products/:id',ControllerCallback(GetProductController));
app.get('/productsupplier',ControllerCallback(GetProductSupplierController));
app.get('/productsupplier/:id',ControllerCallback(GetProductSupplierController));


app.post('/products',ControllerCallback(AddProductController));
app.put('/products/:id',ControllerCallback(UpdateProductController));
app.delete('/products/:id',ControllerCallback(DeleteProductController))

//=============user management=====================
app.post('/createUser',ControllerCallback(AddUserController))
app.get('/userList',auth.validateToken,ControllerCallback(GetUserController))
app.get('/allUserList',auth.validateToken,ControllerCallback(GetAllUserController))
app.post('/login',ControllerCallback(UserLoginController))
app.get('/userDetails/:id',auth.validateToken,ControllerCallback(GetUserByIdController))
app.put('/userUpdate/:id',auth.validateToken,ControllerCallback(UpdateUserController))
app.post('/resetPassword',ControllerFormDataCallback(ResetPasswordController))
app.post('/check_token/:token',ControllerCallback(CheckTokenController))
app.post('/saveResetPassword',ControllerCallback(ResetPasswordByUserController))
app.put('/changePassword/:id',auth.validateToken,ControllerCallback(ChangePasswordController))

//======role management================
app.post('/createRole',auth.validateToken,ControllerCallback(AddRoleController))
app.get('/roles',auth.validateToken,ControllerCallback(GetRoleController))
app.put('/roleUpdate/:id',auth.validateToken,ControllerCallback(UpdateRoleController))
app.get('/role/:id',auth.validateToken,ControllerCallback(GetRoleByIdController))

//======permission management================
app.post('/createPermission',auth.validateToken,ControllerCallback(AddPermissionsController))
app.get('/permissions',auth.validateToken,ControllerCallback(GetPermissionsController))
app.put('/permissionsUpdate/:id',auth.validateToken,ControllerCallback(UpdatePermissionsController))
app.get('/permission/:id',auth.validateToken,ControllerCallback(GetPermissionByIdController));
app.get("/getSubrdinatePermissionsList/:permission_id", auth.validateToken, ControllerCallback(GetSubordinatePermission));

//======user permission management================
app.post('/assignUserRoleOrPermission',auth.validateToken,ControllerCallback(AddUserPermissionsController))
app.put('/updateUserRoleOrPermission',auth.validateToken,ControllerCallback(UpdateUserPermissionsController))
app.get('/permissionDetailsByRoleid/:id',auth.validateToken,ControllerCallback(GetUserPermissionsController))
app.get('/rolePermissionMap',auth.validateToken,ControllerCallback(GetRolePermissionMapController))

//======project management================
app.get('/projectTypes',auth.validateToken,ControllerCallback(GetProjectTypeController))
app.get('/projects/:id/:userid',auth.validateToken,ControllerCallback(GetProjectsController))
app.post('/createProject',auth.validateToken,ControllerCallback(AddProjectController))
app.put('/updateProject',auth.validateToken,ControllerCallback(UpdateProjectController))
app.post('/projectDeploy/:id',auth.validateToken,ControllerCallback(ProjectDeployController))
app.post('/projectExecuteStart/:id',auth.validateToken,ControllerCallback(ProjectExecuteStartController))
app.post('/projectExecuteStop/:id',auth.validateToken,ControllerCallback(ProjectExecuteStopController))
app.post('/projectExecuteLog/:id',auth.validateToken,ControllerCallback(ProjectExecuteLogController))
app.post('/projectExecuteStatus/:id',auth.validateToken,ControllerCallback(ProjectExecuteStatusController))
app.get('/getProjectsByPipelineId/:pipeline_id',auth.validateToken,ControllerCallback(GetProjectsByPipelineId))
app.get('/deleteSourceFromProject/:project_id/:source_id',auth.validateToken,ControllerCallback(DeleteSourceFromProject))
app.post('/projectSourceMap/:project_id/:source_id/:created_by',auth.validateToken,ControllerCallback(ProjectSourceMap))
app.post('/deleteProject/:project_id',auth.validateToken,ControllerCallback(DeleteProjectController))

//======Model management================
app.get('/model/:id/:userid',auth.validateToken,ControllerCallback(GetModelController))
app.post('/createModel',auth.validateToken,ControllerCallback(AddModelController))
app.put('/updateModel',auth.validateToken,ControllerCallback(UpdateModelController))
app.get('/modelCategory/:id',auth.validateToken,ControllerCallback(GetModelCategoryController))
app.get('/modelType/:id',auth.validateToken,ControllerCallback(GetModelTypeController))
app.post('/modelClass',auth.validateToken,ControllerCallback(AddmodelToClassController))
app.get('/modelByPipeline/:id',auth.validateToken,ControllerCallback(GetModelByPipelineController))
app.post('/modelVerify/:id',auth.validateToken,ControllerCallback(ModelVerifyController))
app.post('/modelRegister/:id',auth.validateToken,ControllerCallback(ModelRegisterController))
app.post('/deleteModel/:model_id',auth.validateToken,ControllerCallback(DeleteModelController))
app.get('/GetmodelTypebymodelcat/:id',auth.validateToken,ControllerCallback(GetModelTypeBymodelCatController))
app.get('/GetFrameworklist/:id',auth.validateToken,ControllerCallback(GetFrameworklistController))


//======Pipeline management================
app.get('/pipeline/:id/:userid',auth.validateToken,ControllerCallback(GetPipelineController))
app.get('/pipelineTypes',auth.validateToken,ControllerCallback(GetPipelineTypesController))
app.post('/createPipeline',auth.validateToken,ControllerCallback(AddPipelineController))
app.put('/updatePipeline',auth.validateToken,ControllerCallback(UpdatePipelineController))
app.post('/pipelineAttachModel',auth.validateToken,ControllerCallback(AttachPipelineModelController))
app.get('/pipelineModelType/:id',auth.validateToken,ControllerCallback(GetPipelineModelTypeController))
app.get('/deleteModelFromPipeline/:modelId/:pipelineId',auth.validateToken,ControllerCallback(DeleteModelFromPipelineController))
app.post("/deletePipeline/:pipeline_id", auth.validateToken, ControllerCallback(DeletePipelineController))
app.post("/updatePipelineModel", auth.validateToken, ControllerCallback(UpdateModelPipelineController))

//======Algorithm management================
app.get('/algorithm/:id',auth.validateToken,ControllerCallback(GetAlgorithmController))
//app.post('/createProject',auth.validateToken,ControllerCallback(AddProjectController))

//======Framework management================
app.get('/framework/:id',auth.validateToken,ControllerCallback(GetFrameworkController))
//app.post('/createProject',auth.validateToken,ControllerCallback(AddProjectController))

//======Processing management================
app.get('/processing/:id',auth.validateToken,ControllerCallback(GetProcessingController))

//======Class management================
app.get('/class/:id/:userid',auth.validateToken,ControllerCallback(GetClassController))
app.post('/createClass',auth.validateToken,ControllerCallback(AddClassController))
app.put('/updateClass',auth.validateToken,ControllerCallback(UpdateClassController))
app.get('/classByModel/:id',auth.validateToken,ControllerCallback(GetClassByModelController))
app.delete('/classDelete/:id',auth.validateToken,ControllerCallback(DeleteClassByIdController))

//====== Class Attribute management================
app.post('/createClassAttribute',auth.validateToken,ControllerCallback(AddClassAttributeController))
app.put('/updateClassAttribute',auth.validateToken,ControllerCallback(UpdateClassAttributeController))
app.get('/classAttributeDatatype',auth.validateToken,ControllerCallback(GetClassAttributeDatatypeController))
app.get("/deleteClassAttribute/:id", auth.validateToken, ControllerCallback(DeleteClassAttributeByIdController))

//======Class Attribute Value management================
app.post('/createClassAttributeValue',auth.validateToken,ControllerCallback(AddClassAttributeValueController))
app.put('/updateClassAttributeValue',auth.validateToken,ControllerCallback(UpdateClassAttributeValueController))
app.get('/deleteClassAttributeValue/:id', auth.validateToken, ControllerCallback(DeleteClassAttributeValueByIdController))

//======Area management================
app.get('/area/:id',auth.validateToken,ControllerCallback(GetAreaController))

//======Source management================
app.get('/source/:id/:userid',ControllerCallback(GetSourceController))
app.post('/createSource',auth.validateToken,ControllerCallback(AddSourceController))
app.get('/sourceFileList/:id/:userid',auth.validateToken,ControllerCallback(GetSourceFileListController))
app.post('/sourceFileUpload',auth.validateToken,ControllerFormDataCallback(AddSourceFileUploadController))
app.get('/sourceLocationType/:id',auth.validateToken,ControllerCallback(GetSourceLocationController))
app.put('/updateSource',auth.validateToken,ControllerCallback(UpdateSourceController))
app.put('/updateSourceFileMap',auth.validateToken,ControllerCallback(UpdateSourceFileMapController))
app.get('/sourceFileDownload/:id',auth.validateToken,ControllerCallback(GetSourceFileDownloadController))
app.get('/condition/:id',ControllerCallback(GetSourceFileListConditionController))
app.get('/projecttype/:id',ControllerCallback(GetProjectTypeDataController))


//======Alarm management================
app.post('/createAlarm',auth.validateToken,ControllerCallback(AddAlarmController))
app.get('/alarms/:id',auth.validateToken,ControllerCallback(GetAlarmController))
app.get('/alarmsCategory/:id',auth.validateToken,ControllerCallback(GetAlarmCategoryController))
app.put('/updateAlarm',auth.validateToken,ControllerCallback(UpdateAlarmController))

//======Zone management================
app.post('/createZone',auth.validateToken,ControllerCallback(AddZoneController))
app.put('/updateZone',auth.validateToken,ControllerCallback(UpdateZoneController))
app.get('/zones/:id',auth.validateToken,ControllerCallback(GetZoneController))

//======Artifacts management================
app.get('/artifacts/:id',auth.validateToken,ControllerCallback(GetArtifactsTypeController))
app.get('/artifactsWeight/:id/:location',auth.validateToken,ControllerCallback(GetArtifactWeightController))
app.get('/artifactRetrieve/:id/:type/:location/:format',auth.validateToken,ControllerCallback(GetArtifactRetrieveController))
app.post('/artifactStore',auth.validateToken,ControllerFormDataCallback(AddArtifactStoreController))
app.post('/artifactWeightStore',auth.validateToken,ControllerFormDataCallback(AddArtifactWeightStoreController))
app.post('/artifactList',auth.validateToken,ControllerCallback(GetArtifactController))
app.post('/updateArtifact',auth.validateToken,ControllerFormDataCallback(UpdateArtifacController))

//======Module management================
app.post('/createModule',auth.validateToken,ControllerCallback(AddModuleController))
app.get('/modules',auth.validateToken,ControllerCallback(GetModuleController))
app.get('/modulePermission/:hashid',auth.validateToken,ControllerCallback(GetModulePermissionController))
app.put('/updateModule/:id/:hashid',auth.validateToken,ControllerCallback(UpdateModuleController))
app.get('/module/:id',auth.validateToken,ControllerCallback(GetModuleByIdController))


// ==============Audit Log =================
app.post('/userAuditLog',auth.validateToken,ControllerCallback(AddUserAuditLogController))
app.get('/getUserAudits',auth.validateToken,ControllerCallback(GetUserAuditLogController))
app.get('/searchAudits',auth.validateToken,ControllerCallback(SearchAuditLogController))
app.post('/filterAudits',auth.validateToken,ControllerCallback(FilterAuditLogController))
app.get('/eventAudits',auth.validateToken,ControllerCallback(EventAuditLogController))
app.post("/exportAudits", auth.validateToken, ControllerCallback(ExportAuditLogsController))
app.get("/exportsList", auth.validateToken, ControllerCallback(GetExportsListController))
app.get("/download", auth.validateToken, DownloadController())

// =================== Audit Graph===============
// app.get('/loginChart',auth.validateToken,ControllerCallback(LoginAuditChartController))
app.post('/loginChart',auth.validateToken,ControllerCallback(LoginAuditChartController))
app.post('/eventChart',auth.validateToken,ControllerCallback(EventAuditChartController))
app.post('/loginFailureChart',auth.validateToken,ControllerCallback(LoginFailureAuditChartController))
app.post('/eventFailureChart',auth.validateToken,ControllerCallback(EventFailureAuditChartController))
app.get('/checkadmin/:id',auth.validateToken,ControllerCallback(AdminCheckController))

// ============== Server Resource Usagew===================
app.get('/serverUsage',auth.validateToken,ControllerFormDataCallback(ServerUsageController))
app.post('/gpuUsage',auth.validateToken,ControllerCallback(GpuUsageController)) //not gvn in  trello
app.get('/processDetails',auth.validateToken,ControllerFormDataCallback(ProcessController)) //not gvn in  trello

app.use(ControllerCallback(NotFoundController))


app.listen(3020,()=>{
    start_server.startServer();
    console.log('3020 port active...')
})

// {
//     detail: [
//       {
//         loc: [Array],
//         msg: 'field required',
//         type: 'value_error.missing'
//       }
//     ]
//   }