
const {headers}=require('../../config/config')
const {makeAuditDb}=require('../../data-access/index');
const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function AddUserPermissionsController({makeAddUserPermission}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest;
        var result;
        var msg;
        //await makeAddUserPermission(body)
        if(body.type == "permission"){
            
        const products=GetProductResponseHandler(await makeAddUserPermission(body))
        result=products(makeAddUserPermissions);
        msg = result[0][0].message;
        }
        else
        {
            result = await makeAddUserPermission(body);
            if(result.affectedRows == 1 && result.changedRows == 1 )
                msg = "Role assigned successfully";
            else if(result.affectedRows == 1 && result.changedRows == 0 )
            msg = "Role already assigned";
        }
        console.log("contrto",result);
        await makeAuditDb.UserAudit({Id:body.userid,Type:"Assign User Permission",Effect:"Permission Assigned",Status:1});

        return{
            headers,
            statusCode:200,
            body:{
                
                message: msg
            }
        }
    }
    function makeAddUserPermissions(product) {
        return product      
}
}

module.exports=AddUserPermissionsController