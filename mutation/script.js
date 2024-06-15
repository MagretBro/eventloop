//<!-- Mutation observable -->
// const { JSDOM } = require('jsdom');
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p><div id="header">0</div><button id="button">Click me</button>`);
// const document = dom.window.document;


const header= document.getElementById('header');
const button= document.getElementById('button');

let counter = 0;

button.addEventListener('click', () =>{
  counter++;
  header.innerText = counter.toString();
  header.appendChild(document.createElement('div'))
  console.log('Синхронный код')

  Promise.resolve().then(() => console.log('promise'))
  setTimeout(() => console.log('timer'), 0)
})

const mutationObserver = new MutationObserver((mutations) => {
  console.log(mutations)
})

mutationObserver.observe(header, {
  subtree: true,
  attributeOldValue: true,
  childList: true,
})