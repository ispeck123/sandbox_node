
const {headers}=require('../../config/config')
const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function LoginFailureAuditChartController({makeGetLoginFailureChart}){
    
    return async function handle(httpRequest){
        const {body}=httpRequest   
        if(body.user!="All")
            body.user =JSON.stringify(body.user)    
        var newbody;  
        if(httpRequest.headers.id){
            newbody=({...body,'id':parseInt(httpRequest.headers.id)});
        }
        else 
        newbody=body; 
        //const result=await makeGetLoginFailureChart(httpRequest.headers,body)
        const products=GetProductResponseHandler(await makeGetLoginFailureChart(newbody))
        let result=products(makeGetLoginFailureCharts);
        for(var index=0;index<result[0].length;index++)
        {

            if( result[0][index].dataa==null ||  result[0][index].dataa=="null") 
            {
                result[0].splice(index,1);
                index=index-1;
            }
        }
        for(var i=0;i<result[0].length;i++)
        {
            result[0][i].dataa=JSON.parse(result[0][i].dataa)
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
    function makeGetLoginFailureCharts(product) {
        return product      
}
}

module.exports=LoginFailureAuditChartController