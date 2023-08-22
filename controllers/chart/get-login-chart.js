
const {headers}=require('../../config/config')
const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function LoginAuditChartController({makeGetLoginChart}){
    
    return async function handle(httpRequest){
    
        const {body}=httpRequest
        console.log("contrto",httpRequest.headers.id); 
        if(body.user!="All")
            body.user =JSON.stringify(body.user)
            console.log(body)
        var newbody;  
        if(httpRequest.headers.id){
            newbody=({...body,'id':parseInt(httpRequest.headers.id)});
        }
        else 
        newbody=body;
        //const result=await makeGetLoginChart(httpRequest.headers,body)
        const products=GetProductResponseHandler(await makeGetLoginChart(newbody))
        let result=products(makeGetLoginCharts);
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
    function makeGetLoginCharts(product) {
        return product      
}
}

module.exports=LoginAuditChartController