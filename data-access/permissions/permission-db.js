const mysql = require('mysql')

function makePermissionDb({ExecQuery}) {

    let sql;
    let sql1;
    const con = mysql.createConnection({
        host:"202.21.32.156",
        user:"ispeck",
        password:"Root1234",
        database:"ispeck"
    })
    
    return Object.freeze({
        GetAll,
        GetById,
        GetUSERPER,
        GetByName,
        Insert,
        InsertPer,
        UpdateRole,
        Update,
        getDataNoArgument,
        UpdateUserPer,
        GetUSERPERNAME, 
        getSubordinatePermissions
    })

   
   
    async function GetAll() {
        sql = "SELECT * FROM permission_master"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        sql = `SELECT * FROM permission_master WHERE permission_master.PER_ID=${id}`
        return ExecQuery(sql)
    }

    async function GetUSERPER(id) {
        sql = `SELECT A.ROLE_PER_ID,A.ROLE_ID,C.ROLE_NAME,A.ROLE_PER_STATUS,A.PER_ID,B.PER_NAME as PERMISSION_NAME,A.CREATION_DATE
        FROM role_permissions as A left join permission_master as B on A.PER_ID=B.PER_ID  left join  role_maser as C  on A.ROLE_ID=C.ROLE_ID WHERE A.ROLE_ID=${id}`
        return ExecQuery(sql)
    }


  async function GetUSERPERNAME() {
        // sql = `SELECT A.ROLE_ID,B.PER_NAME as PERMISSION_NAME
        // FROM role_permissions as A left join permission_master as B on A.PER_ID=B.PER_ID ` 
         sql = `SELECT DISTINCT B.ROLE_NAME ,
         (SELECT CONCAT( "[",GROUP_CONCAT(D.PER_NAME),"]") FROM role_permissions as C left join permission_master 
         as D on C.PER_ID=D.PER_ID where C.ROLE_ID=A.ROLE_ID) AS  PERMISSION_NAME 
                FROM role_permissions as A LEFT JOIN role_maser as B on A.ROLE_ID=B.ROLE_ID`
        return ExecQuery(sql)
    }

    async function GetByName({RoleName}) {
        sql = `SELECT * FROM roles WHERE roles.RoleName='${RoleName}'`
        return ExecQuery(sql)
    }

    async function Insert({   
        PERNAME,
        PERDESC
    } = {}) {
        sql = `INSERT INTO permission_master(PER_NAME,PER_DESC,PER_STATUS) VALUES ('${PERNAME}','${PERDESC}',1)`
        return ExecQuery(sql)
    }

    async function InsertPer({   
        userid,
        perid
    } = {}) {
        let len = JSON.parse(perid).length;
        let data =JSON.parse(perid);
        await Insertrole(len,data,userid)  
        return "Sucess";
    } 
    
    async function UpdateUserPer({   
        userid,
        perid
    } = {}) {
        let len = JSON.parse(perid).length;
        let data =JSON.parse(perid);
        sql1= `DELETE FROM role_permissions WHERE ROLE_ID='${userid}'`;
        con.query(sql1);
        await Insertrole(len,data,userid)  
        return "Sucess";
    }

    async function Insertrole(len,data,userid){
        for (var i=0;i<len;i++)
        {
            sql = `INSERT INTO role_permissions(ROLE_ID,PER_ID,ROLE_PER_STATUS) VALUES ('${userid}','${data[i]}',1)`;
            con.query(sql);

        }
    }


    async function UpdateRole({   
        userid,
        roleid
    } = {}) {
        sql = `UPDATE user_master SET user_role_id=${roleid} where user_id=${userid}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE permission_master SET ? WHERE permission_master.PER_ID=${id}`
        return ExecQuery(sql,body)
    }

    async function getDataNoArgument(sqlvalue){
        console.log("data-access",sqlvalue);
        return ExecQuery(sqlvalue)
    }

    async function getSubordinatePermissions(parent_permission_id) {
        console.log("data-access", parent_permission_id);
        sql = `select * from ispeck.permission_map where parent_permission_id=${parent_permission_id}`;
        return ExecQuery(sql);
    }
}

module.exports=makePermissionDb