
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/source/view/condition";
function GetSourceFileListConditionController(){
    
    return async function handle(httpRequest){
        console.log("Ekhane .............////////////////////////......................")
        var id,userid,complete_url;
        if(httpRequest.params.userid== "null")
        {
             id=httpRequest.params.id;
            complete_url= url+'/'+id;
        }
        else
        {
             id=httpRequest.params.id;
             userid=httpRequest.params.userid;
             complete_url= url+'/'+id+'?userid='+userid;
        }
        
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