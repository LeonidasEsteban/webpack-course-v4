import hello from './hello.js'
// console.log('Hola mundo!, desde Webpack');
console.log('Hola mundo!, desde Webpack en un webpack.config');
hello();


if (module.hot) {
  module.hot.accept('./hello.js', function () {
    console.log('Accepting the updated printMe module!');
    hello();
  })
}