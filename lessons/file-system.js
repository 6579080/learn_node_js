const fs = require('fs')
const path = require('path')
const {response} = require("express");

// fs.mkdirSync(path.resolve(__dirname, 'mydir', 'mydir2', 'mydir3'), {recursive: true})


// console.log('start')
// fs.mkdir(path.resolve(__dirname, 'mydir'), (err) =>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('папка создана')
// })
//
// console.log('end')


// fs.rmdir(path.resolve(__dirname, 'mydir'),(err)=>{
//     if(err){
//         throw err;
//     }
// })


// fs.writeFile(path.resolve(__dirname, 'test_write.txt'),'5 qwerty 7 9 11 фыфы ыдчя', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('файл записан')
// } )

 // fs.appendFile(path.resolve(__dirname, 'test_write.txt'), '\ndfgdkfk fsdfsads', (err)=>{
 //     if (err){
 //         throw err;
 //     }
 //     console.log('файл дописан')
 // })


//ад колбэков

// fs.writeFile(path.resolve(__dirname, 'test_write.txt'),'5 qwerty 7 9 11 фыфы ыдчя', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('файл записан')
//     fs.appendFile(path.resolve(__dirname, 'test_write.txt'), '\ndfgdkfk fsdfsads', (err)=>{
//         if (err){
//             throw err;
//         }
//         console.log('файл дописан')
//         fs.appendFile(path.resolve(__dirname, 'test_write.txt'), '\ndfgdkfk fsdfsads', (err)=>{
//             if (err){
//                 throw err;
//             }
//             console.log('файл дописан')
//         })
//
//     })
//
// } )


const writeFileAsync = async (path, data) =>{
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) =>{
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}
//
// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'test_4kb.txt'),  '123'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'test_4kb.txt'), '\n123'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'test_4kb.txt'), '\n456'))
//     .catch(err =>console.log(err))


const readFileAsync = async (path, data) =>{
    return new Promise((resolve, reject) => fs.readFile(path,{encoding:'utf-8'}, (err, data) =>{
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}

// readFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const removeFileAsync = async (path) =>{
    return new Promise((resolve, reject) => fs.rm(path, (err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}


// removeFileAsync(path.resolve(__dirname, 'test_4kb.txt'))
//     .then(()=> console.log('file was removed'))
//     .catch(err => console.log(err))


//через переменную окружения передать строку, записать ее в файл
//прочитать файл, посчитать кол-во слов в файле и записать
//их в файл count.txt, затем удалить файл


const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(()=> readFileAsync(path.resolve(__dirname,'text.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname,'count.txt'), `количество слов ${count}`))
//     .then(()=> removeFileAsync(path.resolve(__dirname, 'text.txt')))













