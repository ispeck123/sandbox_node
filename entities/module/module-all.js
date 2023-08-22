
function BuildMakeModuel({Validate}) {
    return function makeModule({
      MODULE_NAME,
      PERMISSION_ID
    } = {}) {
        
        Validate.IsValid(MODULE_NAME)
 
     
        return Object.freeze({
            getMOD_NAME:()=>MODULE_NAME,
            getPERID:()=>PERMISSION_ID
        })

    }
}


module.exports = BuildMakeModuel