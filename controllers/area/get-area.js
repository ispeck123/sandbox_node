
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/area/view";
function GetAreaController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params
        //console.log(id);

    const response = await fetch(url+'/'+id);
    const json = await response.json();
    console.log(json.response.area);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.area
            }
        }
    }
}

module.exports=GetAreaController