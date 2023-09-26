function makeUserDb({ExecQuery}) {

    let sql;
    let sql1;
    let sql2;

    return Object.freeze({
        GetAll,
        GetById,
        GetByEmail,
        GetAllUserRoles,
        GetUserRoles,
        GetByName,
        GetByNameandPassword,
        Insert,
        Remove,
        Update, 
        SearchRole,
        UpdateAttempt,
        GetCountTime,
        GetByNameAndEmail,
        InsertPasswordTrack,
        InsertPasswordLog,
        GetPasswordById,
        UpdatePassword,
        GetPassworddata,
        Inserttoken,
        CheckPass,
        ChangeTokenTime,
        GetToken,
        GetCount,
        UpdatePasswordTrack,
        UpdateUser,
        GetChangePasswrdDate,
        GetRegisterPasswrdDate,
        GetAllUsers,
        GetUsersFromName
    })
    async function GetAll() {
        sql = "SELECT A.*,B.* FROM ispeck.user_master as A inner join role_maser as B where A.USER_ROLE_ID=B.ROLE_ID"
        return ExecQuery(sql)
    }
    
    async function GetAllUsers() {
        sql = "SELECT * FROM ispeck.user_master"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        // console.log("ERROR NI SQ ", id);
        sql = `SELECT * FROM user_master WHERE user_master.USER_ID=${id}`;
        // console.log(sql)
        return ExecQuery(sql)
    }

    async function GetByName({Name}) {
        sql = `SELECT * FROM user_master WHERE user_master.USER_NAME='${Name}'`
        return ExecQuery(sql)
    }
  async function UpdateAttempt({Id,Attempt,Count}) {
        let count = Attempt + 1;
        var counttime =Count;
        console.log(count);
         if (count == 5)
         {
            sql = `UPDATE user_master SET WRONG_ATTEMPT= WRONG_ATTEMPT+1,LOCK_ACCOUNT=1 ,COUNT_TIME='${counttime}' where USER_ID='${Id}'`
            sql1 = `UPDATE user_master SET WRONG_ATTEMPT= 0,LOCK_ACCOUNT=0,COUNT_TIME=0 where USER_ID='${Id}'`
            console.log("enter");
            let time=setInterval(function(){
                console.log("ticking");
                counttime = counttime - 1;
                sql2 = `UPDATE user_master SET COUNT_TIME=${counttime} where USER_ID='${Id}'`
                return ExecQuery(sql2);
             },100000)
        
             

            setTimeout(function(){ 
                console.log("stop ticking");
                clearInterval(time);       
                return ExecQuery(sql1)
                },2900000)
         }
         else
        sql = `UPDATE user_master SET WRONG_ATTEMPT= WRONG_ATTEMPT+1 where USER_ID='${Id}'`
        return ExecQuery(sql)
    }

    async function GetByNameandPassword({Name},{Password}) {
        sql = `SELECT * FROM user_master WHERE users.USER_NAME='${Name}' and USER_PASSWORD='${Password}'`
        return ExecQuery(sql)
    }
    
    async function GetCountTime({Name}) {
        sql = `SELECT COUNT_TIME FROM user_master WHERE USER_NAME='${Name}'`
        return ExecQuery(sql)
    }

    async function GetByEmail({email}){
        sql = `SELECT * FROM user_master WHERE user_master.USER_EMAIL='${email}'`
        return ExecQuery(sql)
    }  
   
    async function GetUserRoles(id){
        sql=`SELECT roles.RoleName,users.UserName FROM users
        INNER JOIN userroles ON users.Id=userroles.UserId
        INNER JOIN roles ON userroles.RoleId=roles.Id
        WHERE users.Id=${id} `

        return ExecQuery(sql)
    }

    async function GetAllUserRoles(){
        sql=`SELECT roles.RoleName,users.UserName FROM users
        INNER JOIN userroles ON users.Id=userroles.UserId
        INNER JOIN roles ON userroles.RoleId=roles.Id
        `

        return ExecQuery(sql)
    }

    async function GetPasswordById(id){
        sql=`SELECT * FROM user_password_track  WHERE user_password_track.USER_ID=${id}`

        return ExecQuery(sql)
    }

    async function Insert(UserFullName,UserName,Password,Email) {
        console.log("USERNAME",UserName)
        sql = `INSERT INTO user_master(USER_FULLNAME,USER_EMAIL,USER_NAME,USER_PASSWORD,USER_STATUS,WRONG_ATTEMPT,LOCK_ACCOUNT,COUNT_TIME) VALUES ('${UserFullName}','${Email}','${UserName}','${Password}',1,0,0,0)`

        return ExecQuery(sql)
    }

    async function GetByNameAndEmail({Name,Email}) {
        sql = `SELECT USER_ID,CREATION_DATE FROM user_master WHERE user_master.USER_NAME='${Name}' and user_master.USER_EMAIL='${Email}'`
        return ExecQuery(sql)
    }

     async function InsertPasswordTrack({Id,Password}) {
        sql = `INSERT INTO user_password_track(USER_ID,FIRST_PASSWORD) VALUES('${Id}','${Password}')`
        return ExecQuery(sql)
    } 

    async function InsertPasswordLog({Id,RPassword,LPassword,Event,Count,Status}) {
        sql = `INSERT INTO password_audit(USER_ID,RECENT_PASSWORD,LAST_PASSWORD,EVENT,PASS_CHANGE_COUNT,STATUS) VALUES('${Id}','${RPassword}','${LPassword}','${Event}','${Count}','${Status}')`
        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM users WHERE users.Id=${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE user_master SET user_master.USER_EMAIL = '${body.Email}' WHERE user_master.USER_ID=${id}`
        return ExecQuery(sql,body)
    } 
    
    async function UpdatePassword({Id,Password}){
        sql=`UPDATE user_master SET USER_PASSWORD = '${Password}' WHERE USER_ID='${Id}'`
        return ExecQuery(sql)
    }
  
    

 
    async function GetPassworddata(id){
        sql = `Select FIRST_PASSWORD,SECOND_PASSWORD FROM user_password_track WHERE USER_ID=${id}`
        return ExecQuery(sql)
    }

    async function Inserttoken({id,token}){
        sql = `UPDATE user_password_track SET TOKEN ='${token}',TOKEN_STATUS=1  WHERE USER_ID='${id}'`
        return ExecQuery(sql)
    }
   
    async function CheckPass(email){
        sql = `SELECT USER_EMAIL FROM user_master WHERE user_master.USER_EMAIL='${email}'`
        return ExecQuery(sql)
    }
    
    async function ChangeTokenTime(token){
        var vacant=null;
        sql = `UPDATE user_password_track SET TOKEN_STATUS=0,TOKEN='${vacant}' WHERE TOKEN='${token}'`
        return ExecQuery(sql)
    }
    
    async function GetToken({token}){
        sql = `SELECT A.TOKEN_STATUS,A.USER_ID,B.USER_PASSWORD from user_password_track as A INNER JOIN user_master as B 
        ON A.USER_ID=B.USER_ID WHERE A.TOKEN='${token}'`
        return ExecQuery(sql)
    }
    
    async function GetCount(id){
        sql = `SELECT MAX(PASS_CHANGE_COUNT)  AS PASS_COUNT FROM password_audit WHERE USER_ID=${id} LIMIT 1`
        return ExecQuery(sql)
    }

    async function UpdatePasswordTrack({Id,Password,token,NewPassword}){
        if(token=="No token")
        {
            sql=`UPDATE user_password_track SET FIRST_PASSWORD='${NewPassword}',THIRD_PASSWORD=SECOND_PASSWORD, 
            SECOND_PASSWORD = '${Password}' WHERE USER_ID='${Id}'`
            return ExecQuery(sql)
        }
        else
        {
            sql=`UPDATE user_password_track SET FIRST_PASSWORD='${NewPassword}',THIRD_PASSWORD=SECOND_PASSWORD, 
        SECOND_PASSWORD = '${Password}',TOKEN_STATUS=0 WHERE USER_ID='${Id}' and TOKEN='${token}'`
        return ExecQuery(sql)
        }
        
    } 
    
    async function UpdateUser(){
        sql=`UPDATE user_master SET WRONG_ATTEMPT=0,LOCK_ACCOUNT=0, COUNT_TIME = 0`
        return ExecQuery(sql)
    } 

 

    async function GetChangePasswrdDate({id,result}){
      var type = "Reset Password";
      var type1 = "Change Password";

        sql=`SELECT max(creation_date) as creation_date FROM user_audit_log where 
        user_audit_log.event_result='${result}' and user_audit_log.user_id='${id}' and
        (user_audit_log.event_type='${type}' or user_audit_log.event_type='${type1}')  ;`
        return ExecQuery(sql)
    } 

        
    async function GetRegisterPasswrdDate({id,type,result}){
     
        sql=`SELECT creation_date as creation_date FROM user_audit_log where 
        user_audit_log.event_type='${type}' and user_audit_log.event_result='${result}' and user_audit_log.user_id='${id}';`
        return ExecQuery(sql)
    }  
    

       async function SearchRole({name}){
     
        sql=`SELECT ROLE_ID FROM role_maser WHERE ROLE_NAME='${name}' ;`
        return ExecQuery(sql)
    }
    
    async function GetUsersFromName({name}){
        sql = `SELECT * FROM user_master where USER_NAME = '${name}';`
        return ExecQuery(sql)
    }
}

module.exports=makeUserDb