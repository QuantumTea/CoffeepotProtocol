var http = require('http') // http module
var fs = require('fs') // file system module

var http200 = fs.readFileSync('./200.html')
var http204 = fs.readFileSync('./204.html')
var http418 = fs.readFileSync('./418.html')
var brewedCoffeeResponse = fs.readFileSync('./coffee.json')

// create an HTTP server listening on post 8888
http.createServer(function (request, resource) {

    if (request.method === 'GET') {
        console.log("saw a GET")
        // handle a GET
        // return some HTCPCP boilerplate
        resource.writeHead(200, {'Content-Type': 'application/coffee-pot-command'})
        resource.end(brewedCoffeeResponse)
    }
    if (request.method === 'POST') {
        // handle a POST / BREW request, these are analogous
        // return a cup of coffee
        console.log('saw a POST')
        resource.writeHead(200, {'Content-Type': 'message/coffeepot'})
        resource.end(http200)
    }
    if (request.method === 'PUT') {
        // handle a PUT request, going to treat this as my 418
        console.log('saw a PUT')
        resource.writeHead(418, {'Content-Type': 'application/coffee-pot-command'})
        resource.end(http418)
    }
        if (request.method === 'DELETE') {
        console.log("saw a DELETE")
        // handle a Delete
        // return some HTCPCP boilerplate
        resource.writeHead(204, {'Content-Type': 'application/coffee-pot-command'})
        resource.end(http204)
    }
}).listen(8888)

console.log("Static file server running at\n  => http://localhost:8888" + "/\nCTRL + C to shutdown")
