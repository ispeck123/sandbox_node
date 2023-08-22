
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/project/execute/start";
function ProjectExecuteStartController(){
    
    return async function handle(httpRequest){
        const {params}=httpRequest
        console.log('success',params.id);
        const response = await fetch(url+'?project_id='+params.id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
    const json = await response.json();
    console.log(json);
  // console.log(json.response);
  
        return{
            headers,
            statusCode:200,
            body:{
                data:json
            }
        }
    }
}

module.exports=ProjectExecuteStartController

