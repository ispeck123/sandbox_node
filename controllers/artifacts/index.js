
const GetArtifactsTypeController=require('./get-artifacts')()
const GetArtifactWeightController=require('./get-artifact-weight')()
const GetArtifactRetrieveController=require('./get-artifacts-retrieve')()
const AddArtifactStoreController=require('./add-artifact-store')()
const AddArtifactWeightStoreController=require('./add-artifact-weight-store')()
const GetArtifactController=require('./get-artifact-list')()
const UpdateArtifacController = require("./update-artifact")()

module.exports={    
    GetArtifactsTypeController,
    GetArtifactWeightController,
    GetArtifactRetrieveController,
    AddArtifactStoreController,
    AddArtifactWeightStoreController,
    GetArtifactController, 
    UpdateArtifacController
}