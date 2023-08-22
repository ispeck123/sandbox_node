
function MakeGetAllUser({makeUserDb}) {
    return async function getAllUser() { 
        return await makeUserDb.GetAllUsers()
    }   
}

module.exports=MakeGetAllUser