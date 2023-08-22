
function BuildMakeUserPermission({Validate}) {
    return function makeuserPermission({
        
        roleperid,
        type,
        userid
    } = {}) {
        
        Validate.IsValid(type)

        

        

            
        return Object.freeze({
            getroleperid:()=>roleperid,
            gettype:()=>type,
            getuserid:()=>userid
        })

    }
}


module.exports = BuildMakeUserPermission