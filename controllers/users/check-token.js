const {headers}=require('../../config/config')

function CheckTokenController({makeCheckToken}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest
        const {token}=httpRequest.params;

        const result=await makeCheckToken(token)
        if (result=="expired")
        {
            return{
                headers,
                statusCode:200,
                body:{
                    message:'Link has Expired!.Please click on Forgot Link to resend link'
                }
            }        
        }
        else if(result=="notexpired"){
            return{
                headers,
                statusCode:200,
                body:{
                    message:'Success'
                }
            }
        }
       
    }
}

module.exports=CheckTokenController