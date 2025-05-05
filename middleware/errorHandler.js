const statusCodeVals = require("../constants");

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode: 500;

    switch (statusCode) {
        case statusCodeVals.VALIDATION_ERROR:
            res.json({title: "Validation Error", 
                httpStatusCode: statusCode,
                message: err.message, 
                stackTrace: err.stack});
            break;
    
        case statusCodeVals.UNAUTHORIZED:
            res.json({title: "Unauthorized", 
                httpStatusCode: statusCode,
                message: err.message, 
                stackTrace: err.stack});
            break;
    
    
        case statusCodeVals.FORBIDDEN:
            res.json({title: "Forbidden", 
                httpStatusCode: statusCode,
                message: err.message, 
                stackTrace: err.stack});            
            break;
    

        case statusCodeVals.NOT_FOUND:
            res.json({title: "Not found", 
                httpStatusCode: statusCode,
                message: err.message, 
                stackTrace: err.stack});
            
            break;

        case statusCodeVals.SERVER_ERROR:
            res.json({title: "Server Error", 
                httpStatusCode: statusCode,
                message: err.message, 
                stackTrace: err.stack});
            break;
    
        default:
            console.log("Great work!");
            break;
    }
    
}

module.exports = errorHandler;