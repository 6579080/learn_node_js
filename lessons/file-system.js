const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'mydir', 'mydir2', 'mydir3'), {recursive: true})
console.log('start')
fs.mkdir(path.resolve(__dirname, 'mydir', 'mydir2', 'mydir3'), (err) =>{
    if(err){
        console.log(err)
    }
    console.log('папка создана')
})

console.log('end')