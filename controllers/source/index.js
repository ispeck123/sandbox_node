
const GetSourceController=require('./get-source')()
const AddSourceController=require('./add-source')()
const GetSourceFileListController=require('./get-source-fileList')()
const AddSourceFileUploadController=require('./add-source-fileUpload')()
const GetSourceLocationController=require('./get-source-location')()
const UpdateSourceController=require('./update-source')()
const GetSourceFileDownloadController=require('./get-source-fileDownload')()
const UpdateSourceFileMapController=require('./update-source-filemap')()
const GetSourceFileListConditionController=require('./get-source-file-list-condition')()
const GetProjectTypeDataController=require('./get-project-type-data')()

module.exports={    
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
}