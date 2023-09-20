
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/pipeline/update/model";
function UpdateModelPipelineController(){
    
    return async function handle(httpRequest){
        const {body}=httpRequest;
        //console.log(body);
        console.log("\n\n\n\nPipeline_id && Model_id::==> ", body.pipeline_id, body.model_id, "\n", `
            {
                "pipeline_id": ${body.pipeline_id}, 
                "model_id": ${JSON.stringify(body.model_id)}
            }
        `);
        const response = await fetch(url, {
            method: 'POST',
            body: `{
                "pipeline_id": ${body.pipeline_id}, 
                "model_id": ${JSON.stringify(body.model_id).replace('"', "")}
            }`,
            headers: { 'Content-Type': 'application/json' }
        })
        
        const json = await response.json();

        console.log(JSON.stringify(json));
        // console.log(json.response);
  
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

module.exports=UpdateModelPipelineController