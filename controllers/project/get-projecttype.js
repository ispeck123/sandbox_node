
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/project/types";
function GetProjectTypeController(){
    
    return async function handle(httpRequest){
        

    const response = await fetch(url);
    const json = await response.json();
    console.log(json.response.project_type);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.project_type
            }
        }
    }
}

module.exports=GetProjectTypeController