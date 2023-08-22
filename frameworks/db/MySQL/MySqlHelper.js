// const mysql = require('mariadb')
const mysql = require('mysql')
const util = require('util')
const fs = require('fs');

let rawdata = fs.readFileSync('service.json');
let connection = JSON.parse(rawdata);

function makeDb() {
   const host="202.21.32.156"
//    const host="localhost"
   const user="ispeck"
   const password="Root1234"
//    const password="0000"
   const database="ispeck" 
   /* const host = process.env.MYSQL_HOST;
    const user = process.env.MYSQL_USER;
    const password = process.env.MYSQL_ROOT_PASSWORD;
    const database = process.env.MYSQL_DATABASE; */

    // const con = mysql.createPool({
    const con = mysql.createConnection({
        host:host,
        user:user,
        password:password,
        database:database
    })
    console.log("rows3333",connection);

  //  check();
    async function check(){
        console.log("rows3333",);

        let pool  = await con.getConnection(); 
        try {
        const rows = await pool.query("SELECT * from  user_master");
        pool.release();

        console.log("rows",rows);
    }catch (error) {
        console.log("rows",error);
        
    }
    }
   

    function transaction(callback=null){
        return util.promisify(con.beginTransaction)
        .call(con,callback)
    }

    function rollback(callback=null){
        return util.promisify(con.rollback)
        .call(con,callback)
    }

    function commit(callback=null){
        return util.promisify(con.commit)
        .call(con,callback)
    }

   async function query(sql, args) {
  
        // let pool  = await con.getConnection(); 
        // query_result=await pool.query( sql, args);
        // pool.release();
        // return (query_result);
       return util.promisify(con.query)
           .call(con, sql, args)
    }



    async function close() {
        // let pool  = await con.getConnection(); 
        // return (pool.end())
       return util.promisify(con.end).call(con)
    } 
    function singledat(sql,args) {
       

        return util.promisify(con.query)
        .call(con, sql, args)
    }

    return Object.freeze({
        query,
        close,
        transaction,
        rollback,
        commit,
        singledat,
        con
    })
}

module.exports = makeDb
