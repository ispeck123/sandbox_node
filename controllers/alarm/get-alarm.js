
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/alarms/view";
function GetAlarmController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;
        //console.log(id);

    const response = await fetch(url+'/'+id);
    const json = await response.json();
    console.log(json.response.alarms);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.alarms
            }
        }
    }
}

module.exports=GetAlarmController