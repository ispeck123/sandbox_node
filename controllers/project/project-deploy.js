
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/project/deploy";
function ProjectDeployController(){
    
    return async function handle(httpRequest){
        const {params}=httpRequest
        console.log('success',params.id);
        const response = await fetch(url+'/'+params.id, {
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
                message: json.msg,
                data:json
            }
        }
    }
}

module.exports=ProjectDeployController