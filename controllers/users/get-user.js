
const {headers}=require('../../config/config')
const auth=require('../../auth/db')
function GetUserController({makeGetUser}){
    
    return async function handle(httpRequest){
        //const {headers}=httpRequest
                //console.log(headers["authorization"])
                //auth.validateToken()
        const {body}=httpRequest        
        const result=await makeGetUser(body)
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

module.exports=GetUserController