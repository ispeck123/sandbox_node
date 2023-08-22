var randtoken = require('rand-token');
const mysql = require('mysql')

function makeModuleDb({ExecQuery}) {

    let sql
    let sql1

    const con = mysql.createConnection({
        host:"202.21.32.156",
        user:"ispeck",
        password:"Root1234",
        database:"ispeck"
    })
    
    return Object.freeze({
        Insert,
        GetAll,
        GetById,
        GetModulePermission,
        getDataNoArgument,
        Update
    })

    async function getDataNoArgument(sqlvalue){
        console.log("data-access",sqlvalue);
        return ExecQuery(sqlvalue)
    }

   
    async function Insert({   
        MODNAME,
        PERID
    } = {}) {
         let len = JSON.parse(PERID).length;
         let data =JSON.parse(PERID);
         let hashid= randtoken.generate(15);
        sql = `INSERT INTO module_master(MODULE_NAME,PER_MODULE_HASH_ID,MODULE_PER_STATUS) VALUES ('${MODNAME}','${hashid}',1)`
      
            await InsertPermit(data,hashid,len); 
            con.query(sql);

            return ExecQuery(sql)
    }
    
    async function Update(id,hashid,moduleInfo) {
         let len = JSON.parse(moduleInfo.PERMISSION_ID).length;
         let data =JSON.parse(moduleInfo.PERMISSION_ID);
   
        sql = `Update module_master SET MODULE_NAME='${moduleInfo.MODULE_NAME}' WHERE PER_MODULE_HASH_ID='${hashid}' and MODULE_ID='${id}'`
        sql1= `DELETE FROM module_permission WHERE MODULE_HASH_ID='${hashid}'`;
        con.query(sql1);
        setTimeout( async function(){ 
            await InsertPermit(data,hashid,len); 
 
            },10000)
        return ExecQuery(sql)
    }


    async function InsertPermit(data,hashid,len) {
        var i=0;
        while (i<len)
        // for(var i=0;i<len;i++)
        {
            sql1 = `INSERT INTO module_permission(MODULE_PER_ID,MODULE_HASH_ID) VALUES ('${data[i]}','${hashid}')`
            con.query(sql1);
            i++;
        }        
    } 
     async function GetAll() {
        sql = `SELECT MODULE_ID,MODULE_NAME,MODULE_PER_STATUS,CREATION_DATE,PER_MODULE_HASH_ID FROM module_master`
        return ExecQuery(sql)
    } 
      async function GetById(id) {
        sql = `SELECT MODULE_ID,MODULE_NAME,MODULE_PER_STATUS,CREATION_DATE,PER_MODULE_HASH_ID FROM module_master WHERE MODULE_ID='${id}'`
        return ExecQuery(sql)
    } 
    
    async function GetModulePermission(hashid) {
        sql = `SELECT A.MODULE_PER_ID as PERMISSION_ID,B.PER_NAME  as PERMISSION_NAME FROM module_permission AS A
         INNER JOIN permission_master as B on A.MODULE_PER_ID = B.PER_ID WHERE A.MODULE_HASH_ID='${hashid}'`
        return ExecQuery(sql)
    }
}

module.exports=makeModuleDb