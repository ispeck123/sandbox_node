
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/artifact/retrieve";
function GetArtifactRetrieveController(){
    
    return async function handle(httpRequest){
        const id=httpRequest.params.id;
        const type=httpRequest.params.type;
        const location=httpRequest.params.location;
        const format=httpRequest.params.format;

        console.log(url+'/'+id+'?artifact_type_id='+type+'&location='+location+'&format='+format);
       
        const response = await fetch(url+'/'+id+'?artifact_type_id='+type+'&location='+location+'&format='+format);
        const json = await response.json();
        console.log(json.response.configuration);
  
        console.log(json.response.Parameter)
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data: json.response
        }
    }
}
}

module.exports=GetArtifactRetrieveController