
const {headers}=require('../../config/config');
const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function AddModuleController({makeAddModule}){

    return async function handle(httpRequest){   
        console.log("contrto");
        const {body}=httpRequest
        console.log("contrto",body);
        const products=GetProductResponseHandler(await makeAddModule(body))
        let result=products(makeAddModules);
        console.log("contrto",result);

         //await makeAddModule(body)
        return{
            headers,
            statusCode:200,
            body:{
                message: result[0][0].message
            }
        }
    }
    function makeAddModules(product) {
        return product      
}
}

module.exports=AddModuleController