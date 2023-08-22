

function MakeUpdatedRole({makeRoleDb}) {
    return async function updateRole(id,body) { 
        
          return await makeRoleDb.Update(id,body)
      
    }


    
}






module.exports = MakeUpdatedRole