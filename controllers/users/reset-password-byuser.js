
const {headers}=require('../../config/config')
const makeResetPasswordByUser = require('../../use-cases/user/reset-password-byuser')

function ResetPasswordByUserController(){
    
    return async function handle(httpRequest){    
        
        const {body,params}=httpRequest
        const {id}=params
        console.log("body", body)
        console.log("id", id)
        let res = await makeResetPasswordByUser(id, body)
        if (res == true){
            return{
                headers,
                statusCode:200,
                body:{
                    message:'Password changed successfully'
                }
            }
        }
        else {
            return{
                headers,
                statusCode:400,
                body:{
                    message:'Password changed failed'
                }
            }
        }
        
    }
}

module.exports=ResetPasswordByUserController