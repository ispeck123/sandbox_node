
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/project_by_pipeline_id/get";
function GetProjectsByPipelineId () {
    return async function handle(httpRequest) {
        var { pipeline_id } = httpRequest.params;
        console.log("getting porjectlist for pipeline_id:: ", pipeline_id);

        complete_url= url+'/'+pipeline_id;
        
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
                data:json.response.projects
            }
        }
    }
}

module.exports=GetProjectsByPipelineId