
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/project/view";
function GetProjectsController(){
    
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
             console.log("userid",userid)
             complete_url= url+'/'+id+'?userid='+userid;
        }


    const response = await fetch(complete_url);
    const json = await response.json();
    console.log(json.response.projects);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.projects
            }
        }
    }
}

module.exports=GetProjectsController