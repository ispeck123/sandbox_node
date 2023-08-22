
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/getmodelby/modelcategoryid";
function GetModelTypeBymodelCatController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;
        //console.log(id);

    const response = await fetch(url+'/'+id);
    const json = await response.json();
        return{
            headers,
            statusCode:200,
            body:{
                message:json.msg,
                data:json.response.model_type
            }
        }
    }
}

module.exports=GetModelTypeBymodelCatController