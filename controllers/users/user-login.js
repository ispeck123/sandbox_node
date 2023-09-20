
const {headers}=require('../../config/config')
const auth=require('../../auth/db')
const {makeGetByIdpassword} = require('../../use-cases/user')
const {makeUserDb,makeAuditDb}=require('../../data-access/index');

function UserLoginController({}){
    return async function handle(httpRequest){  
        const {body}=httpRequest      
        // const result= await makeGetByIdpassword(body);
        const result= await makeGetByIdpassword(body);
        console.log("LOGIN CHECK",result)
        var status, effect ;     
        let count_time=await makeUserDb.GetCountTime({Name:body.UserName});
        let user_id=await makeUserDb.GetByName({Name:body.UserName});
        var userd=user_id[0].USER_ID 

        if(result=="nomatched" || result=="notmatched" || result=="lockaccount" )
        status = 0;
        else 
        status = 1;

        if(result=="nomatched")
            effect = "Username not found";
        else if(result=="lockaccount")
            effect = "Your account has been locked! Please try after "+count_time[0].COUNT_TIME+" minutes.";
        else if(result=="notmatched")
            effect = "Password does not matched!";
        else
            effect = "Login Successfull";
        // await makeAuditDb.UserAudit({Id:user_id[0].USER_ID,Type:"Login",Effect:effect,Status:status});
        var pass=await makeUserDb.GetPassworddata(userd);
        var count=await makeUserDb.GetCount(user_id[0].USER_ID);

        // await makeUserDb.InsertPasswordLog({Id:user_id[0].USER_ID,RPassword:pass[0].FIRST_PASSWORD,LPassword:pass[0].SECOND_PASSWORD,Event:"Login",Count:count[0].PASS_COUNT,Status:status});
        // console.log("REUSLT",result)
       if(result=="nomatched"){
        return{
            headers,
            statusCode:200,
            body:{                               
                message: "Username not found!"
            
            }
        }
       }
       else if(result=="lockaccount"){
        return{
            headers,
            statusCode:200,
            body:{                               
                message: "Your account has been locked! Please try after "+count_time[0].COUNT_TIME+" minutes."
            
            }
        }
       }else if(result=="expired"){
        return{
            headers,
            statusCode:200,
            body:{                               
                message: "Your password  validity has expired .Please change"
            
            }
        }
       }
       else if(result!="notmatched"){
        const token =auth.generateAccessToken({body: body.UserName})
        return{
            headers,
            statusCode:200,
            body:{
                data: {accessToken: token,userid:result},                 
                message: "Success"
            
            }
        }
       }else{
        return{
            headers,
            statusCode:200,
            body:{                               
                message: "Password does not match!"
            
            }
        }
       }

       
       
    }
   
}


module.exports=UserLoginController