
const {headers}=require('../../config/config')
function AdminCheckController({makeAdminCheck}){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params
     
        const result=await makeAdminCheck(id)
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

module.exports=AdminCheckController