const httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

// Create a routes object to hold route functions
const routes = {
    "GET": {},
    "POST": {}
};

// Create the handle function to handle requests
exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

// Create the get function to map route functions
exports.get = (url, action) => {
    routes["GET"][url] = action;
};

// Create the post function to map route functions
exports.post = (url, action) => {
    routes["POST"][url] = action;
};