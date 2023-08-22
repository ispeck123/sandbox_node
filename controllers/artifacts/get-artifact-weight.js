
const {headerForm}=require('../../config/config');
const headers=headerForm;
const fetch = require("node-fetch");
const path = require('path');
var fs = require('fs');
const { json } = require('body-parser');

const url = "http://164.52.218.100:9000/artifact/weight/retrieve";
function GetArtifactWeightController(){
    
    return async function handle(httpRequest){
        const id=httpRequest.params.id;
        const location=httpRequest.params.location;

        console.log(httpRequest.params);
        console.log(url+'/'+id+'?location='+location);

        const xdataa=await fetch(url+'/'+id+'?location='+location).then(x => x.arrayBuffer())
        const filePath = `/../../download/artifact/${Date.now()}_weight.pdf`;
        const filePath1 = filePath.split(`/../../download/artifact/`);
        console.log(filePath)
        console.log(filePath1[1])
        const val=Buffer.from(xdataa);
        const jsonval= val.toString('base64');

        fs.writeFileSync(path.join(__dirname,filePath),jsonval);


    /* const vallue=_arrayBufferToBase64(xdataa);
    //  console.log(Buffer.toString('base64'))
      let v=Buffer.from(jsonval, 'base64')
      console.log("data",vallue);*/

    return{
        headers,
        statusCode:200,
        body:{
            message:json.msg,
              data: filePath1[1]
        }
    }
    }
}

module.exports=GetArtifactWeightController

