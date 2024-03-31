// HTML Selectors Const Variables
import {main,div,buttons} from '../index.js'
import {reindeer,emoji} from '../index.js'

function addEmoji() {
    const img = document.createElement('img');
    img.src = './assets/img/cute.png';
    div.append(img);
}

export function growUp(obj,width,height) {
    obj.style.width = width + 'rem';
    obj.style.height = height + 'rem';
}

export class App {
    constructor() {
        const img = document.createElement('img');
        img.src = './assets/img/reindeer.gif';
        main.append(img);
        addEmoji();
    }

    btnYes = () => {
        const div = document.createElement('div'),
        p = document.createElement('p'),
        img = document.createElement('img');

        div.classList.add('love','container');
        document.body.appendChild(div);
        p.textContent = 'Siii te amo, eres el amor de mi vida!';
        img.src = './assets/img/tiAmo.gif';

        buttons.remove();
        div.append(p);
        div.append(img);
    }
}