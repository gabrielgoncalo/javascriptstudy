const http = require('http');
//const url = require('url');

//const routes = require('./routes');
const UsersController = require('./controllers/UserController');


const server = http.createServer((request, response) =>{
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);
    

    if(request.url === '/users' && request.method ==='GET'){
        UsersController.listUsers(request, response);
    } else {
        response.writeHead(404, {'content-type': 'text/html' });
        response.end(`Cannot ${request.method} ${request.url}`);

    }

}); 

server.listen(3000, () => console.log('Server started at http://localhot:3000'));