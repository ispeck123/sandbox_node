
function MakeGetAllRole({makeRoleDb}) {
    return async function getAllRole() { 
        return await makeRoleDb.GetAll()
    }   
}

module.exports=MakeGetAllRole