
const {headers}=require('../../config/config')
const auth=require('../../auth/db')
function GetModuleController({makeGetAllModule}){
    
    return async function handle(httpRequest){
       console.log("contrt")
        const {body}=httpRequest        
        const result=await makeGetAllModule(body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:result
            }
        }
    }
}

module.exports=GetModuleController