const {User} = require('../../entities/index')
const bcrypt = require("bcrypt")


function makeGetByIdpassword({makeUserDb}) {
    return async function UserLogin(userInfo){  
          console.log("______IN GET BY ID PASSWORD USER____________\n");    
          console.log("USERINFO:: ", userInfo);
          const user = await User(userInfo)
          const result = await makeUserDb.GetByName({Name:user.getUserName()})
          console.log(userInfo);
          const count=await passwordcheckexpire(result[0].USER_ID);
          console.log(result[0]);
           
           if(result[0]== "undefined" || result[0]== undefined || result[0]== "") {
                console.log("---------> Password not ")  
                Msg='nomatched';
                return Msg
        }
        else {
              if(result[0].LOCK_ACCOUNT == 1)
              {

                console.log("---------> Password not ")   
                Msg='lockaccount';
                return Msg
              }
            else 
            {
              if(count == "expired")
              {
                Msg='expired';
                return Msg

              }
              else
              {
                const hashedPassword = result[0].USER_PASSWORD
                //console.log('database password:'+hashedPassword)
                const userid = result[0].USER_ID;
                console.log(result[0].USER_ID);
               // console.log('given password:'+user.getPassword())
                if (await bcrypt.compare(user.getOldPassword(),hashedPassword)) {
                  console.log("---------> Login Successful")
                  console.log("---------> Generating accessToken")
                  Msg='success';
                  return userid
                }  
                else {
                  console.log("---------> Password not matched")  
                  Msg='notmatched';
                  await makeUserDb.UpdateAttempt({Id:result[0].USER_ID,Attempt:result[0].WRONG_ATTEMPT,Count:30})
                  return Msg
               }
              }
                     
                 }
          
        }
        }
        async function passwordcheckexpire(id){
          res = await makeUserDb.GetChangePasswrdDate({id:id,result:"Password Changed Successfully"});
          console.log(res)

          // if(res[0].creation_date=="null" || res[0].creation_date==null) 
          // {
          //   res = await makeUserDb.GetRegisterPasswrdDate({id:id,type:"Register",result:"User created successfully"});
          //   console.log("hhhhhhh",res)
          // }
       
        //   var given_time=res[0].creation_date.getTime();
        //   console.log(given_time)
        //   console.log((given_time/1000))
        //   var current_time=new Date();
        //   const diffTime = Math.abs(current_time - given_time);
        //   const diffDays =  Math.ceil(diffTime/(1000*60*60*24))
        //   console.log("differene.............",diffDays)

        // if (diffDays > 89)
        // {
        //   return "expired"
        // }
        //  else
        //  {

        //   return "not expired"
        // }

        }
   
}
module.exports=makeGetByIdpassword