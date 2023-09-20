
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/class_attribute/datatypes";
function GetClassAttributeDatatypeController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;
        //console.log(id);

    const response = await fetch(url);
    const json = await response.json();
    console.log(json.response.class_attribute_datatypes);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.class_attribute_datatypes
            }
        }
    }
}

module.exports=GetClassAttributeDatatypeController
