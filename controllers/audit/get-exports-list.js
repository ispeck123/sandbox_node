
const { headers } = require('../../config/config')


function ExportsListController({ makeGetExportsList }) {

    return async function handle(httpRequest) {
        var result;

        result = await makeGetExportsList();
        console.log("Exports List:: ", result)

        return {
            headers,
            statusCode: 200,
            body: {
                message: 'success',
                data: result
            }
        }
    }
}

module.exports = ExportsListController