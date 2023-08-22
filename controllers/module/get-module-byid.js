const {headers}=require('../../config/config')
const {makeModuleDb}=require('../../data-access/index');

function GetModuleByIdController({makeGetModule}){
    
    return async function handle(httpRequest){
       console.log("contrt")
            let b=[];
        const {id}=httpRequest.params
        const result=await makeGetModule(id)
        const result1=await makeModuleDb.GetModulePermission(result[0].PER_MODULE_HASH_ID)
        for (var i=0;i<result1.length;i++){
            console.log("contrt",result1[i].PERMISSION_ID)

            b[i]=result1[i].PERMISSION_ID;
        }
        console.log("contrt",{...result,'per':b})
        console.log("contrt",result1.length)

        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:{...result[0],'PERMISSION_ID':b}
            }
        }
    }
}

module.exports=GetModuleByIdController