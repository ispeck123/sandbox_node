
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/artifact/update";
var fs = require('fs');
var formData = require('form-data');
var multiparty = require('multiparty');
function UpdateArtifacController(){

    return async function handle(httpRequest){
        console.log("Httpreq::RES: ", httpRequest.res, httpRequest.body);;

        const body=httpRequest.fdata;
        const res=httpRequest.ffdata;
        var form = new multiparty.Form();
        var form1 = new formData();

        form.parse(body,async function(err, fields, files) {
          
            console.log("Fields:: ", fields, files);
            form1.append("artifact_type_id",fields.artifact_type_id[0]);
            form1.append("artifact_id",fields.artifact_id[0]);
            form1.append("model_id",fields.model_id[0]);
            form1.append("file",fs.createReadStream(files.file[0].path));
            // console.log("MULTPART:: Form1: ", form1);
     
            const response = await fetch(url, {
                method: 'POST',
                body: form1
                // headers: { 'Content-Type': 'application/json' }
            });

            const json =await response.json();
            console.log("response from isepck::", json);
            res.send({statusCode:200, data: json, message: "success"});  

        });
    
    }
    
}

module.exports=UpdateArtifacController