//Readable
//Writable
//Duplex
//Transform такой же как Duplex, но может изменять данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test_4kb.txt'), (err, data) => {
//     if(err){
//         throw err;
//     }else {
//         console.log(data)
//     }
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test_4kb.txt'))
const stream = fs.createReadStream(path.resolve(__dirname, 'test_4kb.txt'), {encoding:'utf-8'})

//один чанк 64кб по дефолту
// stream.on('data', (chunk)=>{
//     console.log(chunk)
// })

// stream.on('end', ()=>console.log('законичть читать'))
// stream.on('open', ()=>console.log('начали читать'))
// stream.on('error', (err)=>console.log(err))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test_write.txt'))
// for (let i = 0; i < 20; i++){
//     writableStream.write(i + '\n');
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error');

const http = require('http');
// http.createServer((req, res)=>{
//     //req readable stream
//     //res writeable stream
//     // req.on('error');
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test_4kb.txt'))
//
//     //стрим закончит читать раньше чем пользователь скачает файл
//     // stream.on('data', chunk => res.write(chunk))
//     // stream.on('end', chunk => res.end())
//
//     //для этого
//     stream.pipe(res)
// })






