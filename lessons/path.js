const path = require('path');

console.log(path.join(__dirname, 'first', 'second', 'third'));
console.log(path.join(__dirname, '..', '..'));
console.log(path.join(path.resolve('first','second')));
const fullpath = path.join(__dirname);
console.log(fullpath)
console.log(path.parse(fullpath))
console.log('разделитель в ос', path.sep)
console.log('проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('название файла', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))


