
function makeGetAllModule({makeModuleDb}) {
    return async function getAllModule() { 
        console.log("use case")

        return await makeModuleDb.GetAll()
    }   
}

module.exports=makeGetAllModule