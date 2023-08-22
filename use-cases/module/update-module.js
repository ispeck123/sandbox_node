const spgenerator=require("../../function/common-function");

function makeUpdatedPerModule({makeModuleDb}){
    return async function updateModule(id,hashid,moduleInfo) {
        console.log("use-case",id,hashid,moduleInfo);
        let pobj = {
            sql: spgenerator.spCallGenarator("updateModuledata", 3),
            sqlvalue: [parseInt(id),hashid,JSON.stringify(moduleInfo)]
          };
    return await makeModuleDb.getDataNoArgument(pobj);
          // return await makeModuleDb.Update(id,hashid,moduleInfo)       
        
    }

}
module.exports = makeUpdatedPerModule