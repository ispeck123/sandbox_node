
const {headers}=require('../../config/config')

function ResetPasswordByUserController({makeResetPasswordByUser}){
    
    return async function handle(httpRequest){    
        const {body}=httpRequest
        await makeResetPasswordByUser(body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Password changed successfully'
            }
        }
    }
}

module.exports=ResetPasswordByUserController