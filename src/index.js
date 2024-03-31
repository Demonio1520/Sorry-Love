import './css/normalize.css'; import './styles.css';
import './js/functions.js';
import {growUp,App} from './js/functions.js';

// HTML Selectors - Const Variables
export const main = document.querySelector('main'),
div = document.querySelector('div'),
buttons = document.querySelector('.buttons');

export const reindeer = '../assets/img/reindeer.gif',
emoji = '../assets/img/cute.png', newApp = new App();
let width = 10, height = 5, clicks = 0;

// HTML Selectors
const btnYes = document.querySelector('#yes'),
btnNot = document.querySelector('#not');

// Events
document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('audio').play();
})
    
btnNot.addEventListener('click',() =>{
    btnNot.disabled = true;
    width += 5, height += 5, clicks += 1;
    if (clicks < 8)  {
        growUp(btnYes,width,height);
        btnNot.disabled = false;
    } else {
        buttons.removeChild(btnNot);
    }
});

btnYes.addEventListener('click',() =>{
    newApp.btnYes();
});