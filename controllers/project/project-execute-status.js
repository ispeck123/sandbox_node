
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/project/execute/status";
function ProjectExecuteStatusController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;
        //console.log(id);

    const response = await fetch(url+'/'+id, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const json = await response.json();
  
        return{
            headers,
            statusCode:200,
            body:{
                data:json
            }
        }
    }
}

module.exports=ProjectExecuteStatusController