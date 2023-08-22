

const NotFoundController=require('./404-Not-Found')
const {
    GetProductController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    GetProductSupplierController,
    RootController
}=require('./products/index')

const {
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
}=require('./users/index')

const {
    AddRoleController,
    GetRoleController,
    UpdateRoleController,
    GetRoleByIdController
}=require('./role/index')

const {
    AddPermissionsController,
    GetPermissionsController,
    UpdatePermissionsController,
    GetPermissionByIdController,
    AddUserPermissionsController,
    UpdateUserPermissionsController,
    GetUserPermissionsController,
    GetRolePermissionMapController, 
    GetSubordinatePermission
}=require('./permissions/index')

const {
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
}=require('./project/index')

const {
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
}=require('./model/index')

const {
    AddPipelineController,
    UpdatePipelineController,
    GetPipelineController,
    GetPipelineTypesController,
    AttachPipelineModelController,
    GetPipelineModelTypeController, 
    DeleteModelFromPipelineController, 
    DeletePipelineController,
    UpdateModelPipelineController
}=require('./pipeline/index')

const {
    GetAlgorithmController
}=require('./algorithm/index')

const {
    GetFrameworkController
}=require('./framework/index')

const {
    GetClassController,
    AddClassController,
    UpdateClassController,
    GetClassByModelController,
    DeleteClassByIdController
}=require('./class/index')

const {
    AddClassAttributeValueController,
    UpdateClassAttributeValueController, 
    DeleteClassAttributeValueByIdController
}=require('./classAttributeValue/index')

const {
    AddClassAttributeController,
    UpdateClassAttributeController,
    GetClassAttributeDatatypeController, 
    DeleteClassAttributeByIdController
}=require('./classAttribute/index')

const {
    GetProcessingController
}=require('./processing/index')

const {
    GetAreaController
}=require('./area/index')

const {
    GetSourceController,
    AddSourceController,
    GetSourceFileListController,
    AddSourceFileUploadController,
    GetSourceLocationController,
    UpdateSourceController,
    GetSourceFileDownloadController,
    UpdateSourceFileMapController,
    GetSourceFileListConditionController,
    GetProjectTypeDataController
}=require('./source/index')

const {
    AddAlarmController,
    GetAlarmController,
    GetAlarmCategoryController,
    UpdateAlarmController
}=require('./alarm/index')

const {
    AddZoneController,
    UpdateZoneController,
    GetZoneController
}=require('./zone/index')

const {
    GetArtifactsTypeController,
    GetArtifactWeightController,
    GetArtifactRetrieveController,
    AddArtifactStoreController,
    AddArtifactWeightStoreController,
    GetArtifactController, 
    UpdateArtifacController
}=require('./artifacts/index')

const {
    AddModuleController,
    GetModuleController,
    GetModulePermissionController,
    UpdateModuleController,
    GetModuleByIdController
}=require('./module/index')

const {
    AddUserAuditLogController,
    GetUserAuditLogController,
    SearchAuditLogController,
    FilterAuditLogController,
    EventAuditLogController, 
    ExportAuditLogsController, 
    GetExportsListController
}=require('./audit/index')

const {
  ServerUsageController,
  GpuUsageController,
  ProcessController
}=require('./server/index')

const {
    LoginAuditChartController,
    EventAuditChartController,
    LoginFailureAuditChartController,
    EventFailureAuditChartController,
    AdminCheckController
}=require('./chart/index')


module.exports=Object.freeze({
    RootController,
    GetProductController,
    GetProductSupplierController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    AddUserController,
    UserLoginController,
    GetUserController,
    GetAllUserController,
    GetUserByIdController,
    UpdateUserController,
    ResetPasswordController,
    ResetPasswordByUserController,
    CheckTokenController,
    AddRoleController,
    GetRoleController,
    UpdateRoleController,
    GetRoleByIdController,
    NotFoundController,
    AddPermissionsController,
    GetPermissionsController,
    UpdatePermissionsController,
    GetPermissionByIdController,
    AddUserPermissionsController,
    GetUserPermissionsController,
    GetRolePermissionMapController,
    UpdateUserPermissionsController,
    GetSubordinatePermission, 
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
    DeleteProjectController, 
    DeleteSourceFromProject,
    ProjectSourceMap, 
    GetModelController,
    AddModelController,
    UpdateModelController,
    DeleteModelController, 
    AddmodelToClassController,
    GetModelByPipelineController,
    GetPipelineController,
    GetPipelineTypesController,
    AddPipelineController,
    UpdateModelPipelineController, 
    UpdatePipelineController,
    DeletePipelineController, 
    AttachPipelineModelController,
    GetPipelineModelTypeController,
    DeleteModelFromPipelineController, 
    GetAlgorithmController,
    GetFrameworkController,
    GetClassController,
    AddClassController,
    UpdateClassController,
    DeleteClassByIdController,
    AddClassAttributeController,
    UpdateClassAttributeController,
    AddClassAttributeValueController,
    UpdateClassAttributeValueController,
    DeleteClassAttributeValueByIdController,
    GetClassAttributeDatatypeController,
    DeleteClassAttributeByIdController,
    GetClassByModelController,
    GetProcessingController,
    GetAreaController,
    GetSourceController,
    AddSourceController,
    GetSourceFileListController,
    AddSourceFileUploadController,
    GetSourceLocationController,
    UpdateSourceController,
    GetSourceFileDownloadController ,
    UpdateSourceFileMapController,
    AddAlarmController,
    GetAlarmController,
    GetAlarmCategoryController,
    UpdateAlarmController,
    GetModelCategoryController,
    GetModelTypeController,
    ModelVerifyController,
    ModelRegisterController,
    AddZoneController,
    UpdateZoneController,
    GetZoneController,
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
    AddUserAuditLogController,
    GetUserAuditLogController,
    SearchAuditLogController,
    ChangePasswordController,
    GetExportsListController, 
    FilterAuditLogController,
    EventAuditLogController,
    ExportAuditLogsController, 
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
})