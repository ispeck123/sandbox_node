
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/model/view";
function GetModelController(){
    
    return async function handle(httpRequest){
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


    const response = await fetch(complete_url);
    const json = await response.json();
    console.log(json.response.models);
  
        return{
            headers,
            statusCode:200,
            body:{
                message: json.msg,
                data:json.response.models
            }
        }
    }
}

module.exports=GetModelController