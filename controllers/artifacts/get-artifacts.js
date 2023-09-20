
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/artifacts/type";
function GetArtifactsTypeController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;

        //console.log(id);

    const response = await fetch(url+'/'+id);
    const json = await response.json();
    console.log(json.response.artifactes_type);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.artifactes_type
            }
        }
    }
}

module.exports=GetArtifactsTypeController