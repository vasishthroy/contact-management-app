const statusCodeVals = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;

    switch (statusCode) {
        case statusCodeVals.VALIDATION_ERROR:
            res.json({title: "Validation Error", 
                message: err.message, 
                stackTrace: err.stack});
            break;
    
        case statusCodeVals.UNAUTHORIZED:
            res.json({title: "Unauthorized", 
                message: err.message, 
                stackTrace: err.stack});
            break;
    
    
        case statusCodeVals.FORBIDDEN:
            res.json({title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack});            
            break;
    

        case statusCodeVals.NOT_FOUND:
            res.json({title: "Not found", 
                message: err.message, 
                stackTrace: err.stack});
            
            break;

        case statusCodeVals.SERVER_ERROR:
            res.json({title: "Server Error", 
                message: err.message, 
                stackTrace: err.stack});
            break;
    
        default:
            console.log("Aal izz well !!");
            break;
    }
    
}

module.exports = errorHandler;