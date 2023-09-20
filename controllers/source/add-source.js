
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const url = "http://103.13.113.132:9000/source/create";
var fs = require('fs');
var formData = require('form-data');
var multiparty = require('multiparty');
function AddSourceController(){
    
    return async function handle(httpRequest, next){
        const body=httpRequest.fdata;
        const res=httpRequest.ffdata;
        var form = new multiparty.Form();
        var form1 = new formData();
        form.parse(body,async function(err, fields, files) {
            console.log(fields,files);
            console.log(fs.createReadStream(files.file[0].path));
           form1.append("source_name",fields.source_name[0])
           form1.append("area_id",fields.area_id[0])
           form1.append("fps",fields.fps[0])
           form1.append("process_type",fields.process_type[0])
        //    form1.append("project_id",fields.project_id[0])
           form1.append("source_stored_location_id",fields.source_stored_location_id[0])
           form1.append("created_by",fields.created_by[0])
           form1.append("modified_by",fields.modified_by[0])
           form1.append("description",fields.description[0])
           form1.append("filename",fields.filename[0])
           form1.append("project_type",fields.project_type[0])
           form1.append("file",fs.createReadStream(files.file[0].path))
           const response = await fetch(url, {
               method: 'POST',
               body: form1
               // headers: { 'Content-Type': 'application/json' }
           });
           const json = await response.json();
        });
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:null
            }
        }
    }
}

module.exports=AddSourceController