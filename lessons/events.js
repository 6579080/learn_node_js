const Emitter = require('events');

const emitter = new Emitter();

// document.addEventListener('scroll');

const callback = (data, second, third) => {
    console.log('вы прислали сообщение ' + data);
    console.log('второй аргумент ' + second);
}

emitter.on('message', callback)


// emitter.once('message', (data, second, third)=>{
//     console.log('вы прислали сообщение ' + data);
//     console.log('второй аргумент ' + second);
// } )

const MESSAGE = process.env.message || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'вы не указали сообщение')
}

emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');

emitter.removeAllListeners();
emitter.removeListener('message', callback);