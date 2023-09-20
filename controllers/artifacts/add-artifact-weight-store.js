
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/artifact/weight/store";
var fs = require('fs');
var formData = require('form-data');
var multiparty = require('multiparty');
function AddArtifactWeightStoreController(){

    return async function handle(httpRequest){

        const body=httpRequest.fdata;
        const res=httpRequest.ffdata;
        var form = new multiparty.Form();
        var form1 = new formData();
        console.log("44");

        form.parse(body,async function(err, fields, files) {
          
           
            form1.append("artifact_type_id",fields.artifact_type_id[0]);
            form1.append("location",fields.location[0]);
            form1.append("model_id",fields.model_id[0]);
            form1.append("file",fs.createReadStream(files.file[0].path));
      
     
            const response = await fetch(url, {
                method: 'POST',
                body: form1
                // headers: { 'Content-Type': 'application/json' }
            });

            const json =await response.json();
            console.log(json)
            res.send({statusCode:200, data: json.response, message: json.msg});    
            });
    
        }
    
}

module.exports=AddArtifactWeightStoreController