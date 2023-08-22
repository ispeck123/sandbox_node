const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/source/fileupload";
var fs = require('fs');
var formData = require('form-data');
var multiparty = require('multiparty');

function AddSourceFileUploadController(){
    return async function handle(httpRequest){
       const body=httpRequest.fdata;
        const res=httpRequest.ffdata;
        var form = new multiparty.Form();
        var form1 = new formData();
        form.parse(body,async function(err, fields, files) {
            console.log(fields,files);
            console.log(fs.createReadStream(files.file[0].path));
           form1.append("project_id",fields.project_id[0])
           form1.append("source_id",fields.source_id[0])
           form1.append("created_by",fields.created_by[0])
           form1.append("file_type",fields.file_type[0])
           form1.append("file",fs.createReadStream(files.file[0].path))
           console.log("file",form1);
     
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

module.exports=AddSourceFileUploadController