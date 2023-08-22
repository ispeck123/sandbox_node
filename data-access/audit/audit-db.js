function makeAuditDb({ExecQuery}) {

    let sql;

    return Object.freeze({
     
        UserAudit,
        GetAuditLog,
        GetAuditSearch,
        GetAuditFilter,
        GetEvent,
        LoginGraph,
        EventGraph,
        LoginGraphFailure,
        EventGraphFailure,
        getDataNoArgument,
        CheckAdmin, 
        getExportAuditLogs, 
        SaveExportAuditRecord, 
        getExportsList,
        GetAuditCount
    })
   
  
    async function UserAudit({Id,Type,Effect,Status}){
        var time = new Date();
        var exact_time = (time.getTime())/1000;
        // if (Effect.length > 20) {
        //     let effectStrArr = [];
        //     if (!Effect.includes("/")) {
        //         effectStrArr = Effect.split(" ");
        //         Effect = "";
        //         for (let i = 0; i < effectStrArr.length; i+=2) {
        //             Effect += "/"+effectStrArr[i].concat("\n");
        //         }
        //     } else {
        //         effectStrArr = Effect.split("/");
        //         Effect = "";
        //         for (let i = 0; i < effectStrArr.length; i++) {
        //             Effect += "/"+effectStrArr[i].concat("// \n");
        //         }
        //     }
        // }
        sql = `INSERT INTO user_audit_log(user_id,event_type,event_result,audit_status,timestamp) VALUES('${Id}','${Type}','${Effect}','${Status}','${exact_time}')`
        return ExecQuery(sql)
    }
    
    async function GetAuditLog(id,pageNo,noOfItems){
        console.log("wsdsdsd",id,pageNo,noOfItems)

        if(id==null)
        sql = `SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
        inner join user_master as B on A.user_id=B.USER_ID limit ${pageNo},${noOfItems}` 
        else
        sql = `SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
        inner join user_master as B on A.user_id=B.USER_ID  where A.user_id='${id}' limit ${pageNo},${noOfItems}`
        console.log(sql)

        return ExecQuery(sql)
    }

  

    async function GetAuditSearch(data,id,pageNo,noOfItems){
        if(id==null)
        sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
        inner join user_master as B on A.user_id=B.USER_ID 
		 where A.event_type like concat('%','${data}','%') or  B.USER_FULLNAME like concat('%','${data}','%') or  B.USER_EMAIL like concat('%','${data}','%') limit ${pageNo},${noOfItems} `
      else
        sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
        inner join user_master as B on A.user_id=B.USER_ID 
		 where A.user_id='${id}' and A.event_type like concat('%','${data}','%') or  B.USER_FULLNAME like concat('%','${data}','%') or  B.USER_EMAIL like concat('%','${data}','%') limit ${pageNo},${noOfItems}`
        return ExecQuery(sql)
    } 

    async function GetAuditFilter({fromdate,todate,username,id,pageNo,noOfItems}){
        if(id==null)
        {
            if( username=="" && fromdate!="" && todate!="")
            {
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where  A.timestamp between '${fromdate}' and '${todate}' limit ${pageNo},${noOfItems}`
              
            }
            
            else if( username!="" && fromdate!="" && todate!="")
            {
                
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where A.user_id='${username}' and  A.timestamp between '${fromdate}' and '${todate}' limit ${pageNo},${noOfItems}`
              
            }
            else if( username!="" && fromdate=="" && todate=="")
            {
                
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where A.user_id='${username}' and A.event_type='${event}' limit ${pageNo},${noOfItems}`
              
            }     
            else if( username=="" && fromdate=="" && todate=="")
            {
                
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID limit ${pageNo},${noOfItems}`
              
            }      
        }
        else
        {
            if(username=="" && fromdate!="" && todate!="")
            {
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where A.user_id='${id}' and A.timestamp between '${fromdate}' and '${todate}' limit ${pageNo},${noOfItems}`
              
            }
             
            else if( username!="" && fromdate!="" && todate!="")
            {
                
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where A.user_id='${username}' and  A.timestamp between '${fromdate}' and '${todate}' limit ${pageNo},${noOfItems}`
              
            }
            else if(username!="" && fromdate=="" && todate=="")
            {
                
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where A.user_id='${username}' and A.event_type='${event}' limit ${pageNo},${noOfItems}`
              
            }     
            else if( username=="" && fromdate=="" && todate=="")
            {
                
                sql=`SELECT A.event_type,A.event_result,If (A.audit_status = 1, "Success", "Error") as audit_status,A.creation_date as event_time,B.USER_FULLNAME as name,B.USER_EMAIL as email FROM user_audit_log as A 
                inner join user_master as B on A.user_id=B.USER_ID 
                 where A.user_id='${id}'  limit ${pageNo},${noOfItems}`
              
            }
              
        }
        console.log("controller",sql)

     
        return ExecQuery(sql)
    } 
 
    async function GetAuditCount({fromdate,todate,username,id,data})
    {
        if(id==null){
            if(data=='' )
            {
                if( username=="" && fromdate!="" && todate!="")
                    sql=`Select count(id) as count from user_audit_log where timestamp between  '${fromdate}' and '${todate}'`;
                else if( username!="" && fromdate!="" && todate!="")
                    sql=`Select count(id) as count from user_audit_log where  user_id='${username}' and timestamp between  '${fromdate}' and '${todate}'`; 
                else if( username!="" && fromdate=="" && todate=="")
                    sql=`Select count(id) as count from user_audit_log where user_id='${username}'`; 
                else if( username=="" && fromdate=="" && todate=="")
                    sql=`Select count(id)  as count from user_audit_log`; 
              
            }
            else
            {
                sql=`Select count(A.id) as count from user_audit_log as A inner join user_master as B on A.user_id=B.USER_ID where
                A.event_type like concat('%','${data}','%') or  B.USER_FULLNAME like concat('%','${data}','%') or  
                B.USER_EMAIL like concat('%','${data}','%') `;

            }       
        }
        else
        {
            if(data=='' )
            {
                if( fromdate!="" && todate!="")
                    sql=`Select count(id) as count from user_audit_log where  user_id='${id}' and timestamp between  '${fromdate}' and '${todate}'`; 
                else if( fromdate=="" && todate=="")
                    sql=`Select count(id) as count from user_audit_log where user_id='${id}'`; 
            }
            else
            {
                sql=`Select count(A.id) as count from user_audit_log as A inner join user_master as B on A.user_id=B.USER_ID where
                A.user_id='${id}' and A.event_type like concat('%','${data}','%') or  B.USER_FULLNAME like concat('%','${data}','%') or  B.USER_EMAIL like concat('%','${data}','%') `;

            }
        }
        return ExecQuery(sql)

    }
    async function GetEvent(){
     
        sql=`SELECT distinct event_type FROM user_audit_log ;`
        return ExecQuery(sql)
    }  

    async function Login(){
        sql = `SELECT user_id from user_audit_log `
         return ExecQuery(sql)
    } 
                
        async function LoginGraph(id,fromdate,todate,user){
        var event= "Login";
        if(id==null)
        {
            // if(user=="All" || user=="all" || user=="ALL")
            //     sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
            //            between '${fromdate}' and '${todate}' and event_type='${event}' group by user_id ,the_date`
            // else 
                sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
                        between '${fromdate}' and '${todate}' and event_type='${event}' and user_id='${user}' group by user_id ,the_date` 
        }
        //  sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and event_type='${event}' group by user_id ,the_date`
         else
         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and event_type='${event}' and user_id='${id}' group by the_date`
         sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp between '${fromdate}' and '${todate}' and  event_type='${event}' and user_id='${id}' group by the_date`
         console.log(id,fromdate,todate,user);
         console.log(sql)
         return ExecQuery(sql)
     } 
 
     async function EventGraph(id,fromdate,todate,user){
        if(id==null)
        {
            // if(user=="All" || user=="all" || user=="ALL")
            //     sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
            //            between '${fromdate}' and '${todate}'  group by user_id ,the_date`
            // else 
                sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
                        between '${fromdate}' and '${todate}'  and user_id='${user}' group by user_id ,the_date` 
        }
         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date ,event_type from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY)  group by user_id ,the_date`
         else
         sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date ,event_type,user_id from user_audit_log where timestamp between '${fromdate}' and '${todate}' and user_id='${id}' group by the_date`

         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,event_type from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and user_id='${id}' group by the_date`
         return ExecQuery(sql)
     } 
     
     async function LoginGraphFailure(id,fromdate,todate,user){
        var event= "Login";
        if(id==null)
        {
            // if(user=="All" || user=="all" || user=="ALL")
            //     sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
            //            between '${fromdate}' and '${todate}'  and event_type='${event}' and audit_status=0 group by user_id ,the_date`
            // else 
                sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
                        between '${fromdate}' and '${todate}'  and user_id='${user}'  and event_type='${event}' and audit_status=0 group by user_id ,the_date` 
        }
         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and event_type='${event}' and audit_status=0 group by user_id ,the_date`
         else
         sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp between '${fromdate}' and '${todate}' and event_type='${event}' and audit_status=0 and user_id='${id}' group by the_date`
         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and event_type='${event}' and audit_status=0 and user_id='${id}'group by the_date`
         return ExecQuery(sql)
     } 
 
     async function EventGraphFailure(id,fromdate,todate,user){
        if(id==null || id=="null" || id=="undefined")
        {
            // if(user=="All" || user=="all" || user=="ALL")
            //     sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
            //            between '${fromdate}' and '${todate}' and audit_status=0 group by user_id ,the_date`
            // else 
                sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,user_id from user_audit_log where timestamp 
                        between '${fromdate}' and '${todate}'  and user_id='${user}' and audit_status=0 group by user_id ,the_date` 
        }
         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,event_type from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and audit_status=0  group by user_id ,the_date`
         else
         //sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,event_type from user_audit_log where creation_date >= DATE(NOW() - INTERVAL 7 DAY) and audit_status=0 and user_id='${id}' group by the_date`
         sql = `SELECT count(id) as count, DATE_FORMAT(creation_date, '%Y-%m-%d') AS the_date,event_type,user_id from user_audit_log where timestamp between '${fromdate}' and '${todate}' and audit_status=0 and user_id='${id}' group by the_date`
         return ExecQuery(sql)
     } 
     
     async function getDataNoArgument(sqlvalue){
        console.log("data-access",sqlvalue);
        return ExecQuery(sqlvalue)
    }
    
    async function CheckAdmin(sqlvalue){
        sql = `Select A.ROLE_NAME from role_maser  as A  left join user_master as B on A.ROLE_ID=B.USER_ROLE_ID  where B.USER_ID='${sqlvalue}'`
         return ExecQuery(sql)
    }

    async function SaveExportAuditRecord (type, filename="", creation_date=0, fromdate=0, todate=0, search_keyword=0, status=0) {
        if (type === 'save') {
            console.log("in save Export Audit Record", filename);
            console.log(fromdate, todate);
            sql = `INSERT into ispeck.exports_master (filename, creation_date, fromdate, todate, search_keywords, status) VALUES ( '${filename}', '${creation_date}', '${fromdate}', '${todate}', '${search_keyword}', '${status}')`;
        } else {
            console.log("in update Export Audit Record", filename);
            sql = `UPDATE ispeck.exports_master SET status=1 where filename='${filename}'`;
        }
        return ExecQuery(sql);
    }

    async function getExportAuditLogs(sqlvalue){
        console.log("data-access", sqlvalue);
        return ExecQuery(sqlvalue)
    }

    async function getExportsList () {
        console.log("in Exports list audit -db.js");
        sql = `SELECT * from ispeck.exports_master`;
        return ExecQuery(sql);
    }

}

module.exports=makeAuditDb