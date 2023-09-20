
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/class/delete";
function DeleteClassByIdController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;
        //console.log(body);

    const response = await fetch(url+'/'+id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json();
   // console.log(json);
   console.log(json.response);
  
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

module.exports=DeleteClassByIdController