
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/pipeline/delete";
function DeletePipelineController(){
    
    return async function handle(httpRequest){
        const {params, body}=httpRequest
        console.log("\n\n\n\n\n::-> ", params, "::", url+`/${params.pipeline_id}`);

    const response = await fetch(url+`/${params.pipeline_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    console.log(response);
    const json = await response.json();
    console.log(json.response);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response
            }
        }
    }
}

module.exports=DeletePipelineController