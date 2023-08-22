
const {headers}=require('../../config/config')
const {makePermissionDb}=require('../../data-access/index');


const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function GetRolePermissionMapController({makeRolePermissionMap}){
    
    return async function handle(httpRequest) {
       
        //const {body}=httpRequest    
        const {id}=httpRequest.params   
        // const products=GetProductResponseHandler(await makeRolePermissionMap())
        // let result=products(makeRolePermissionMaps);
        const result=await makeRolePermissionMap();
         const v=((result[0].PERMISSION_NAME).replace(/['"]+/g, ''))
         console.log("What's with V? ::", v)

         for(var i=0;i<result.length;i++)
        {
         //   console.log(parseInt(result[i].PERMISSION_NAME))
        }

        return{
            headers,
            statusCode:200,
            body:{
                message:'success',
                data:result
            }
        }
    }
    function makeRolePermissionMaps(product) {
        return product      
}
}

module.exports=GetRolePermissionMapController