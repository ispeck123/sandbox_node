
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/model/delete";
function DeleteModelController(){
    
    return async function handle(httpRequest){
        const {params, body}=httpRequest
        //console.log(body);

    const response = await fetch(url+`/${params.model_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json();
   // console.log(json);
  // console.log(json.response);
  
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

module.exports=DeleteModelController