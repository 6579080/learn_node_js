const http = require('http');
const EventEmitter = require('events');
// const {router} = require("express/lib/application");
const PORT = process.env.PORT || 5000;
const Router = require('./framework/Router');
const Application = require('./framework/Application');
// const emitter = new EventEmitter();

const app = new Application();


const router = new Router();

router.get('/users', (req, res) => {
    res.end('you send request to /users')
})

router.get('/posts', (req, res) => {
    res.end('you send request to /posts')
})

app.addRouter(router);

// const server = http.createServer(
//
//     // res.writeHead(200, {
//     //     'Content-type': 'application/json'
//     // })
//     // // res.end('<h1>1</h1>сервер работает! gfffffvv');
//     // if (req.url === '/users') {
//     //     return res.end(JSON.stringify([
//     //         {id: 1, name: 'NAME'}
//     //     ]))
//     // }
//     // if (req.url === '/posts') {
//     //     return res.end('POSTS')
//     // }
//     // res.end(req.url)
//  )
app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));






