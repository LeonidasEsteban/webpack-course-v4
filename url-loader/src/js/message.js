import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message.js';

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(()=> {
    todoOk('Han pasado 3 segundos, omg');
  }, 3000)
})


const firstMessage = 'hola mundo desde un módulo'
async function delayedMessage() {
  const message = await waitTime;
  console.log(message);
  renderToDOM(makeMessage(message));
}

export { delayedMessage, firstMessage }
