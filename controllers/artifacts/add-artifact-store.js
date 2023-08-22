
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
// const url = process.env.MYSQL_HOST+"http://164.52.218.100:9000/artifact/store";
const url = "http://164.52.218.100:9000/artifact/store";
var fs = require('fs');
var formData = require('form-data');
var multiparty = require('multiparty');
function AddArtifactStoreController(){

    // return async function handle(httpRequest){
    //     console.log("INSIDE FORM UPLOAD")
    //     const body=httpRequest.fdata;
    //     console.log("BODY :",body)
    //     const res=httpRequest.ffdata;
    //     var form = new multiparty.Form();
    //     var form1 = new formData();
    //     form.parse(body,async function(err, fields, files) {
    //         console.log("Fields and Files",fields,files);
    //         console.log("artifact_type_id :",fields.artifact_type_id)
    //         console.log("location :",fields.location)
    //         console.log("model_id :",fields.model_id)
    //         console.log("pipeline_id :",fields.pipeline_id)
    //         console.log("project_id :",fields.project_id)
    //         console.log("FILE : ",fs.createReadStream(files.file.path));
    //         form1.append("artifact_type_id",fields.artifact_type_id)
    //         form1.append("location",fields.location)
    //         form1.append("model_id",fields.model_id)
    //         form1.append("pipeline_id",fields.pipeline_id)
    //         form1.append("project_id",fields.project_id)
    //         form1.append("file",fs.createReadStream(files.file.path))
      
     
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             body: form1
    //             // headers: { 'Content-Type': 'application/json' }
    //         });

    //         const json =await response.json();
    //         console.log(json)
    //         res.send({statusCode:200, data: json.response, message: json.msg});    
    //         });
    
    //     }
    
        return async function handle(httpRequest) {
        console.log("INSIDE FORM UPLOAD");
        const body = httpRequest.fdata;
        const res = httpRequest.ffdata;
        var form = new multiparty.Form();
          form.parse(body, async function(err, fields, files) {
                const artifactTypeId = fields.artifact_type_id;
                const location = fields.location;
                const modelId = fields.model_id;
                const pipelineId = fields.pipeline_id;
                const projectId = fields.project_id;
                const file = files.file;
      
                const formData = {
                  artifact_type_id: artifactTypeId,
                  location,
                  model_id: modelId,
                  pipeline_id: pipelineId,
                  project_id: projectId,
                  file: fs.createReadStream(file.path)
                };
      
                // Process the formData as needed
                console.log('FormData:', formData);
      
                resolve(formData);
          });
      }
}

module.exports=AddArtifactStoreController