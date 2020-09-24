const path = require('path');
console.log('dirname__', path.join(__dirname, '/123'));
console.log('resolve__', path.resolve());
console.log('3--', path.resolve(__dirname, 'dist'));
console.log('4--', path.resolve('src'));
