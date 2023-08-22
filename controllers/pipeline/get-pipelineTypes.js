
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/pipeline/types";
function GetPipelineTypesController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params
        //console.log(id);

    const response = await fetch(url);
    const json = await response.json();
    console.log(json.response.pipeline_type);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.pipeline_type
            }
        }
    }
}

module.exports=GetPipelineTypesController