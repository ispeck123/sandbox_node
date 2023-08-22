
const bcrypt = require("bcrypt")
 function BuildMakeUser({Hash,Validate}) {
    return async function makeUser({
        Id,
        UserFullName,
        UserName,
        Email,
        Password,
        Status,
        Role,
        WrongAttempt,
        LockAccount, 
        username, 
        password
    } ) {
        console.log("                             __________________________________                         \n");
        console.log("_____________________________|in entiities::users:BuildMakeUser|_____________________ \n");
        console.log(UserName, Password);
        
        Validate.IsValid(UserName, Password)
        .HasLength(UserName,3);

        console.log("after validation ::");

        //Validate.IsValidEmail(Email)

        //const newPassword=await ReturnHashPassword(Password)
        const newPassword = await bcrypt.hash(Password,10);

        
        return Object.freeze({
           getID:()=>Id,
           getUserFullName:()=>UserFullName,
           getUserName:()=>UserName,
           getEmail:()=>Email,
           getPassword:()=>newPassword,
           getOldPassword:()=>Password,
           getStatus:()=>Status,
           getRole:()=>Role,
           getAttempt:()=>WrongAttempt,
           getCount:()=>LockAccount
           
        })

    }

    async function ReturnHashPassword(Password){
        return Hash?await Hash(Password,10):Password
    }
}


module.exports = BuildMakeUser