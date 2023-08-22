
const ServerUsageController=require('./server')()
const GpuUsageController=require('./gpu_usage')()
const ProcessController=require('./process')()


module.exports={    
    ServerUsageController,
    GpuUsageController,
    ProcessController
}