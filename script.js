"use strict"

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btnRight').addEventListener('click', function(){
    offset = offset + 760;
    if (offset > 3800){
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});

document.querySelector('.btnLeft').addEventListener('click', function(){
    offset = offset - 760;
    if (offset < 0){
        offset = 3800;
    }
    sliderLine.style.left = - offset + 'px';
})

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    rendelPopup();
};

function rendelPopup() {
    popup.appendChild(menu);
};

