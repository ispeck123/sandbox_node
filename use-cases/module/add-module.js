const {Module} = require('../../entities/index')


const spgenerator=require("../../function/common-function");

function makeAddPerModule({makeModuleDb}){
    return async function addModule(moduleInfo) {
        console.log("use-case");

        let pobj = {
            sql: spgenerator.spCallGenarator("createModuledata", 1),
            sqlvalue: [JSON.stringify(moduleInfo)]
          };
    return await makeModuleDb.getDataNoArgument(pobj);
        /*const modules = await Module(moduleInfo)
           return await makeModuleDb.Insert({
            MODNAME:modules.getMOD_NAME(),
            PERID:modules.getPERID()
           })  */     
        
    }

}
module.exports = makeAddPerModule