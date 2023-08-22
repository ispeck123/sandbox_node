const {headers}=require('../../config/config');

const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function UpdateModuleController({makeUpdateModule}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const id=params.id;
        const hashid=params.hashid
        const products=GetProductResponseHandler(await makeUpdateModule(id,hashid,body))
        let result=products(makeUpdateModules);
        //await makeUpdateModule(id,hashid,body)

        console.log("use-case",result[0][0]);

        return{
            headers,
            statusCode:200,
            body:{
                message: result[0][0].message
            }
        }
    }
    function makeUpdateModules(product) {
        return product      
}
}

module.exports=UpdateModuleController