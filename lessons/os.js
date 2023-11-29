const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

const cpus = os.cpus();


if (cluster.isMaster){

    for (let i = 0; i < cpus.length -2; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`воркер с pid= ${worker.process.pid}  умер`)
        if (code===signal){
            cluster.fork()
        }else {
            console.log('воркер умер...')
        }
        cluster.fork();
    })

}else {

    console.log(`воркер с pid= ${process.pid} запущен`);
    setInterval(()=> {
        console.log(`воркер с pid= ${process.pid} еще работает`)
    }, 5000)

}


//
// for (let i = 0; i < cpus.length -2; i++){
//     const CPUcore = cpus[i];
// }
//
// console.log(process.pid)
//
// while (true){
//
// }