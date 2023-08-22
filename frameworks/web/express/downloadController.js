const { NotFoundError,UnauthorizedError} = require("../../../core/utils/errors")

module.exports = function DownloadController() {
    
    return (req, res) => {
        
        console.log(req.query);
        // const { filename, id } = ;

        res.send({
            response: "success", 
            msg: "file download"
        });

        

        
        // controller(httpRequest)
        //     .then(httpResponse => {
        //         console.log('data1')
        //         console.log(httpResponse)
        //         if (httpResponse.headers) {
        //             console.log('data2')

        //             res.set(httpResponse.headers)
        //         }
                
        //         res.type('json')
        //         res.status(httpResponse.statusCode).send(httpResponse.body)
                
        //     })
        //     .catch(e =>{
        //         res.status(e instanceof NotFoundError?404:e instanceof UnauthorizedError?401:null||500)
        //         .send({error:e.message})
        //     })
    }
}