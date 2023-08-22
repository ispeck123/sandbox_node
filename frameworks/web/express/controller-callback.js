const { NotFoundError,UnauthorizedError} = require("../../../core/utils/errors")

module.exports = function ControllerCallback(controller) {
    
    return (req, res) => {
        
        const httpRequest = {
            body: req.body,
            query:req.query,
            params: req.params,
            method: req.method,
            path: req.path,
            headers: req.headers,
            fdata: req
            //{
            //    'Content-Type': req.get('Content-Type'),
            //     Referer: req.get('referer'),
             //   'User-Agent': req.get('User-Agent')
          //  }
        }
        
        controller(httpRequest)
            .then(httpResponse => {
                console.log('data1')
                console.log(httpResponse)
                if (httpResponse.headers) {
                    console.log('data2')

                    res.set(httpResponse.headers)
                }
                
                res.type('json')
                res.status(httpResponse.statusCode).send(httpResponse.body)
                
            })
            .catch(e =>{
                res.status(e instanceof NotFoundError?404:e instanceof UnauthorizedError?401:null||500)
                .send({error:e.message})
            })
    }
}