const http = require('http');
const EventEmitter = require('events');



module.exports =class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
        this.middlewares = []
    }

    use(middleware){
        this.middlewares.push(middleware);

    }

    listen(port, callback){
        this.server.listen(port, callback);
    }

    // nedpoint = {
    //  '/users':{
    //      'GET': handler
    //   }
    // }

    addRouter(router){
        Object.keys(router.endpoint).forEach(path =>{
            const endpoint = router.endpoint[path];
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    this.middlewares.forEach(middleware => middleware(req,res))
                    handler(req, res)
                })
            })
        })
    }

    _createServer() {
        return http.createServer((req, res) => {
            req.on('data', (chunk)=> {
                console.log(chunk)
            })
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
            if (!emitted) {
                res.end();

            }
        })
    }
    _getRouteMask(path, method){
        return `[${path}]:[${method}]`
    }
}





