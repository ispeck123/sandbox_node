
function MakeGetUser({makeUserDb}) {
    return async function getUser() { 
        return await makeUserDb.GetAll()
    }   
}

module.exports=MakeGetUser