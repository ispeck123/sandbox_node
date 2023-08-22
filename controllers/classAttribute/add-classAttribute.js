
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/class_attribute/create";
function AddClassAttributeController(){
    
    return async function handle(httpRequest){
        const {body}=httpRequest
        //console.log(body);

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json();
   // console.log(json);
  // console.log(json.response);
  
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response
            }
        }
    }
}

module.exports=AddClassAttributeController