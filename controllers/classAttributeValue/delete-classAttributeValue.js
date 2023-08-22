
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/attribute_values/delete";
function  DeleteClassAttributeValueByIdController(){
    // console.log("|\n|\n|\n|\n|\n|\n|\n|\n|", "in DeleteClassAttributeValueByIdController::");
    return async function handle(httpRequest){
        const {id}=httpRequest.params;

    const response = await fetch(url+'/'+id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json();
   // console.log(json);
   console.log(json.response);
  
        return{
            headers,
            statusCode:200,
            body:{
                message: json.msg,
                data:json.response
            }
        }
    }
}

module.exports=DeleteClassAttributeValueByIdController