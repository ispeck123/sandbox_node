const {headers} = require("../../config/config");
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/model_from_pipeline/delete";

function DeleteModelFromPipelineController () {
    return async function handle(httpRequest) {
        const {modelId, pipelineId} = httpRequest.params;
        console.log("modelId::", modelId, "pipeline::", pipelineId);
        const response = await fetch(url.concat(`/${modelId}/${pipelineId}`), {
            method: "GET", 
            headers: {"Content-type": "application/json"}
        });

        const json = await response.json();
        console.clear();
        console.log("response::json: ", json);

        return {
            headers, 
            statusCode: 200, 
            body: {
                message: json.msg, 
                data: json.response
            }
        }

    }
}

module.exports = DeleteModelFromPipelineController