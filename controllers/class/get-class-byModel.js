
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/class/view/by_model";
function GetClassByModelController(){
    
    return async function handle(httpRequest){
       
        const {id}=httpRequest.params;

    const response = await fetch(url+'/'+id);

    const json = await response.json();
    console.log(json.response.classes);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.classes
            }
        }
    }
}

module.exports=GetClassByModelController