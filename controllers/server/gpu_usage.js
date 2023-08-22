
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/gpu_usage";
function GpuUsageController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;
        //console.log(id);

    const response = await fetch(url,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const json = await response.json();
    console.log(json.response);
  
        return{
            headers,
            statusCode:200,
            body:{
                message: json.msg,
                data:json.response.gpu_usage
            }
        }
    }
}

module.exports=GpuUsageController