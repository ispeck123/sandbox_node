
const {headers}=require('../../config/config')
const {makeUserDb,makeAuditDb}=require('../../data-access/index');
const bcrypt = require("bcrypt")

function AddUserController({makeAddUser}){
    console.log("REQUEST CALL")
    console.log("ADDING USER", makeAddUser)

    return async function handle(httpRequest){        
        const {body}=httpRequest

        const users = await makeUserDb.GetUsersFromName({name: body.UserName});
        if (users.length > 0){        
            return{
                headers,
                statusCode:400,
                body:{
                    message:'Username already exists'
                }
            }
        }
        
        const role=await makeUserDb.SearchRole({name:'New User'});
         const newPassword = await bcrypt.hash(body.Password,10);
        // await makeAddUser(body,role[0].ROLE_ID)
        console.log("CONTROLLER",body.UserFullName)
        await makeUserDb.Insert(body.UserFullName,body.UserName,newPassword,body.Email);
         let user_id=await makeUserDb.GetByNameAndEmail({Name:body.UserName,Email:body.Email});
         console.log("USERID",user_id)
        
         console.log("HASHED PASSWORD",newPassword)
         await makeUserDb.InsertPasswordTrack({Id:user_id[0].USER_ID,Password:newPassword});
         var pass=await makeUserDb.GetPassworddata(user_id[0].USER_ID);
         await makeUserDb.InsertPasswordLog({Id:user_id[0].USER_ID,RPassword:pass[0].FIRST_PASSWORD,LPassword:pass[0].SECOND_PASSWORD,Event:"Adding New User",Count:0,Status:1});
        // await makeAuditDb.UserAudit({Id:user_id[0].USER_ID,Type:"Register",Effect:"User created successfully",Status:1});

        return{
            headers,
            statusCode:200,
            body:{
                message:'User created successfully'
            }
        }
    }
}

module.exports=AddUserController