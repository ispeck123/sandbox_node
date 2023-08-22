
const {headers}=require('../../config/config')
const fetch = require("node-fetch");
const path = require('path');
var fs = require('fs');
const url = "http://164.52.218.100:9000/source/filedownload";
function GetSourceFileDownloadController(){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params;

        console.log(id);

    const xdataa=await fetch(url+'/'+id).then(x => x.arrayBuffer())
    const filePath = `/../../download/source/${Date.now()}_source.pdf`;
    const filePath1 = filePath.split(`/../../download/source/`);
    console.log(filePath1)
    const val=Buffer.from(xdataa);
    const jsonval= val.toString('base64');

    fs.writeFileSync(path.join(__dirname,filePath),jsonval);

  
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:filePath1[1]
            }
        }
    }
}

module.exports=GetSourceFileDownloadController