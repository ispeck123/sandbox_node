
var _ = require('lodash');
var ps = require('current-processes');

function ProcessController(){
    
    return async function handle(httpRequest){        
        const res=httpRequest.ffdata;
        ps.get(function(err, processes) {
 
            var sorted = _.sortBy(processes, 'cpu');
            var result  = sorted.reverse().splice(0, 5);     
             console.log("nbxncbb",result.mem);
             var newbody=[];
            let finalresult={statusCode:200, data: result, message: 'Success'}
            console.log("bbbb",result);
          
            // console.log("nnn",finalresult.data[0]);
            let len = finalresult.data.length;
             for(var i=0;i<len;i++)
            {
                newbody[i]={...finalresult.data[i],'memoryused': parseFloat(finalresult.data[i].mem.usage).toFixed(2)};
                delete newbody[i].mem;
            }
        res.send({statusCode:200, data: newbody, message: 'Success'});    
    });

    }

}

module.exports=ProcessController