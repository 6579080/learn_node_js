const http = require('http');
const EventEmitter = require('events');
// const {router} = require("express/lib/application");
const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();

class Router {
    constructor() {
        // endpoint = {
        //     '/users':{
        //         'GET':handler1,
        //         'POST':handler2,
        //         'DELETE':handler3
        //     }
        // }

        this.endpoint = {}
    }

    request(method = "GET", path, handler) {
        if (!this.endpoint[path]) {
            this.endpoint[path] = {}
        }
        const endpoint = this.endpoint[path];
        if (endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже существует`)
        }
        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)
        })

    }

    get(path, handler) {
        this.request('GET', path, handler);
    }

    post(path, handler) {
        this.request('POST', path, handler);
    }

    put(path, handler) {
        this.request('PUT', path, handler);
    }

    delete(path, handler) {
        this.request('DELETE', path, handler);
    }
}

const router = new Router();

router.get('/users', (req, res) => {
    res.end('you send request to /users')
})

router.get('/posts', (req, res) => {
    res.end('you send request to /posts')
})

const server = http.createServer((req, res) => {
    emitter.emit(`[${req.url}]:[${req.method}]`,req, res)

    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // })
    // // res.end('<h1>1</h1>сервер работает! gfffffvv');
    // if (req.url === '/users') {
    //     return res.end(JSON.stringify([
    //         {id: 1, name: 'NAME'}
    //     ]))
    // }
    // if (req.url === '/posts') {
    //     return res.end('POSTS')
    // }
    // res.end(req.url)
})

server.listen(PORT, () => console.log(`server started on PORT ${PORT}`))






