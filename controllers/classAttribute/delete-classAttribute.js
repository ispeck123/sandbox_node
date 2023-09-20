const { headers } = require("../../config/config");
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/attribute/delete";

function DeleteClassAttributeByIdController() {
    return async function handle(httpRequest) {
        const {id} = httpRequest.params;

        const response = await fetch(url.concat("/", id), {
            method: "GET", 
            headers: { "Content-Type": "application/json" }
        })

        const json = await response.json();
        console.log("Response from ispeck server:: ", response);
        return {
            headers, 
            statusCode: 200, 
            body: {
                message:json.msg,
                data:json.response
            }
        }
    }
}

module.exports = DeleteClassAttributeByIdController;