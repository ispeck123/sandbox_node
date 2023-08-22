function makeRoleDb({ExecQuery}) {

    let sql

    return Object.freeze({
        GetAll,
        GetById,
        GetByName,
        Insert,
        Remove,
        Update
    })

   

    async function GetAll() {
        sql = "SELECT * FROM role_maser"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        sql = `SELECT * FROM role_maser WHERE ROLE_ID=${id}`
        return ExecQuery(sql)
    }

    async function GetByName({RoleName}) {
        sql = `SELECT * FROM roles WHERE roles.RoleName='${RoleName}'`
        return ExecQuery(sql)
    }

    async function Insert({   
        RoleName,
        RoleDesc
    } = {}) {
        sql = `INSERT INTO role_maser(ROLE_NAME,Role_Desc,Role_Status) VALUES ('${RoleName}','${RoleDesc}',1)`
        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM roles WHERE roles.Id=${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE role_maser SET ROLE_NAME='${body.RoleName}',Role_Desc='${body.RoleDesc}',Role_Status='${body.RoleStatus}' WHERE role_maser.ROLE_ID=${id}`
        return ExecQuery(sql,body)
    }
}

module.exports=makeRoleDb