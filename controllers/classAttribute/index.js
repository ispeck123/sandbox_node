
const AddClassAttributeController=require('./add-classAttribute')()
const UpdateClassAttributeController=require('./update-classAttribute')()
const GetClassAttributeDatatypeController=require('./get-classArttibute-datatype')()
const DeleteClassAttributeByIdController = require("./delete-classAttribute")()

module.exports={    
    AddClassAttributeController,
    UpdateClassAttributeController,
    GetClassAttributeDatatypeController,
    DeleteClassAttributeByIdController
}