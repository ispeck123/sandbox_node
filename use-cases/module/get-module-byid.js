
function makeGetModule({makeModuleDb}) {
    return async function getModule(id) { 
        console.log("use case")

        return await makeModuleDb.GetById(id)
    }   
}

module.exports=makeGetModule