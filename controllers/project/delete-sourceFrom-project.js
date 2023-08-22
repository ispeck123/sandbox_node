
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/source_from_project/delete";
function DeleteSourceFromProject () {
    return async function handle(httpRequest) {
        var { project_id, source_id } = httpRequest.params;
        console.log(`Deleting source[${source_id}] from project ${project_id}`);

        complete_url= url+'/'+project_id+'/'+source_id;
        
        const response = await fetch(complete_url, {
            method: "GET", 
            headers: { 'Content-Type': 'application/json' }
        });
        let json = await response.json();
        console.log(json);
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

module.exports=DeleteSourceFromProject