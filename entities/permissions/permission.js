
function BuildMakePermission({Validate}) {
    return function makePermission({
        PERID,
        PER_NAME,
        PER_DESC,
        PER_STATUS
    } = {}) {
        
        Validate.IsValid(PER_NAME)

        

        

            
        return Object.freeze({
            getPERID:()=>PERID,
            getPER_NAME:()=>PER_NAME,
            getPER_DESC:()=>PER_DESC,
            getPER_STATUS:()=>PER_STATUS
        })

    }
}


module.exports = BuildMakePermission