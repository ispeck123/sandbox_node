
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/source/view/condition";
function GetSourceFileListConditionController(){
    
    return async function handle(httpRequest){
        console.log("Ekhane .............////////////////////////......................")
        var id,complete_url;
        id=httpRequest.params.id;
        complete_url= url+'/'+id;
        console.log("Full URL: ",complete_url);
        const response = await fetch(complete_url);
        const json = await response.json();
        console.log("Newly Source condition",json.response.source);
    
            return{
                statusCode:200,
                body:{
                    message:'success',
                    data:json.response.source
                }
            }
    }
}

module.exports=GetSourceFileListConditionController