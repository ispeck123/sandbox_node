const {getProducts,addProduct,updateProduct,deleteProduct,getProductsSuppliers}=require('../../use-cases/product/index')


const GetProductController=require('./get-products')({getProducts})
const AddProductController=require('./add-product')({addProduct})
const UpdateProductController=require('./update-product')({updateProduct})
const DeleteProductController=require('./delete-product')({deleteProduct})
const GetProductSupplierController=require('./get-products-supplier')({getProductsSuppliers})
const RootController=require('./root')()



module.exports={
    GetProductController,
    GetProductSupplierController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    RootController
}






