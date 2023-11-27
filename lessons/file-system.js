const fs = require('fs')
const path = require('path')

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

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
    .then(()=> appendFileAsync(path.resolve(__dirname, 'test.txt'),  '123'))
    .then(()=> appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n123'))
    .then(()=> appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n456'))
    .catch(err =>console.log(err))



















