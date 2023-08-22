

function MakeUpdatedPermission({makePermissionDb}) {
    return async function updatePermission(id,body) { 
        
          return await makePermissionDb.Update(id,body)
      
    }


    
}






module.exports = MakeUpdatedPermission