const btnBurger = document.getElementById('btnBurger');
const btnClose = document.getElementById('btnClose');
const button = document.getElementById('button');
const nav = document.getElementById('nav');


function Drop(){
   nav.classList.add('active');
}

function Close(){
    nav.classList.remove('active');
}

btnBurger.addEventListener('click', Drop );
btnClose.addEventListener('click', Close);