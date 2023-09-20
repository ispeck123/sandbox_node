
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/project/source/map";
function ProjectSourceMap () {
    return async function handle(httpRequest) {
        var { project_id, source_id, created_by } = httpRequest.params;
        console.log(`source[${source_id}] Mapeed to project ${project_id} by ${created_by}`);

        complete_url= url+'/'+project_id+'/'+source_id+'/'+created_by;
        
        const response = await fetch(complete_url, {
            method: "POST", 
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

module.exports=ProjectSourceMap