const {headers}=require('../../config/config')
const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function UpdateUserPermissionsController({makeUpdateUserPermission}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest
        const products=GetProductResponseHandler(await makeUpdateUserPermission(body))
        let result=products(makeUpdateUserPermissions);
        console.log("contrto",result);
        
        //await makeUpdateUserPermission(body)
        return{
            headers,
            statusCode:200,
            body:{
                message: result[0][0].message
            }
        }
    }
    function makeUpdateUserPermissions(product) {
        return product      
}
}

module.exports=UpdateUserPermissionsController