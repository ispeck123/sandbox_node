

const {makeModuleDb}=require('../../data-access/index')


const makeAddModule=require('./add-module')({makeModuleDb})
const makeGetAllModule=require('./get-module')({makeModuleDb})
const makeGetModulePermission=require('./get-module-permission')({makeModuleDb})
const makeUpdateModule=require('./update-module')({makeModuleDb})
const makeGetModule=require('./get-module-byid')({makeModuleDb})


module.exports=Object.freeze({
    makeAddModule,
    makeGetAllModule,
    makeGetModulePermission,
    makeUpdateModule,
    makeGetModule
})