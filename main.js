require('./main.css');
const show = require('./show.js');

show('webpack !');
console.log(module);

if (module.hot) {
  console.log('???');
  module.hot.accept('./show.js', function() {
    console.log('Accepting the updated printMe module!');
  });
}
