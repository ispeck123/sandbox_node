

const AddClassAttributeValueController=require('./add-classAttributeValue')()
const UpdateClassAttributeValueController=require('./update-classAttributeValue')()
const DeleteClassAttributeValueByIdController = require("./delete-classAttributeValue")()

module.exports={    
    AddClassAttributeValueController,
    UpdateClassAttributeValueController, 
    DeleteClassAttributeValueByIdController
}