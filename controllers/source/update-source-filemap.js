
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/source_file_map/update";
function UpdateSourceFileMapController(){
    
    return async function handle(httpRequest){
        const {body}=httpRequest
        //console.log(body);

    const response = await fetch(url, {
        method: 'PUT',
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
                message:'success',
                data:json.response
            }
        }
    }
}

module.exports=UpdateSourceFileMapController