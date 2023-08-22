
function BuildMakeRole({Validate}) {
    return function makeRole({
        RoleID,
        RoleName,
        RoleDesc,
        RoleStatus
    } = {}) {
        
        Validate.IsValid(RoleName)

        

        

            
        return Object.freeze({
            getRoleID:()=>RoleID,
            getRoleName:()=>RoleName,
            getRoleDesc:()=>RoleDesc,
            getRoleStatus:()=>RoleStatus
        })

    }
}


module.exports = BuildMakeRole