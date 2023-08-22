
const {headers}=require('../../config/config') 
const token="xyz";

const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function GetProductController(){
   
    return async function handle(httpRequest){
        const {id}=httpRequest

        return{
            statusCode:200,            
            body:{
                message:"running on port 3020"
            }
        }
    }


   
}

module.exports=GetProductController