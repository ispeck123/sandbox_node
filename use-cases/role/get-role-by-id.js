
function MakeGetRole({makeRoleDb}) {
    return async function getRole(id) { 
        return await makeRoleDb.GetById(id)
    }   
}

module.exports=MakeGetRole