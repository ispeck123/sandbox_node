

const Category=require('./categories/index')
const Customer=require('./customers/index')
const Employee=require('./employees/index')
const OrderDetail=require('./order_details/index')
const Order=require('./orders/index')
const Product=require('./products/index')
const Supplier=require('./suppliers/index')
const User=require('./users/index')
const Role=require('./roles/index')
const Permissions=require('./permissions/index')
const UserRole=require('./user-roles/index')
const UserPermissions=require('./permissions/userindex')
const Module=require('./module/index')
const Audit=require('./audit/index')







module.exports={
    Category,
    Customer,
    Employee,
    OrderDetail,
    Order,
    Product,
    Supplier,
    User,
    Role,
    Permissions,
    UserPermissions,
    UserRole,
    Module,
    Audit,
}