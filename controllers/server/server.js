
var osutils = require("os-utils");
var osutil = require("detect-gpu");

function AddUserController(){
    
    return async function handle(httpRequest){        
        const res=httpRequest.ffdata;
        const gpuTier = await osutil.getGPUTier();
        console.log("zxcxc",gpuTier)
        osutils.cpuUsage(function(v) {
      
       
        let result={
            platform:osutils.platform(),
            numofCPU:osutils.cpuCount(),
            CPUUsage: v,
            GPUUsage: gpuTier,
            totalmemory:osutils.totalmem()+ "MB",
            freememory:osutils.freemem()+ "MB",
            freememoryper:osutils.freememPercentage()

        }
        res.send({statusCode:200, data: result, message: 'Success'});    

    });
    }

}

module.exports=AddUserController