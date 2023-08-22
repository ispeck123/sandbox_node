let executeQuery=({database})=>async function(sql,...args){
    const {query}=database
    if (sql.sql)
    return query(sql.sql,sql.sqlvalue)
    else
    return query(sql,...args)
}

module.exports=executeQuery