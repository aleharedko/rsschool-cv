"use strict"
// Берём кнопку вперёд
let btnRight = document.querySelector(".btnRight");
let btnLeft = document.querySelector(".btnLeft");
// Берём слайды
let slides = document.querySelectorAll(".imgSlider");
 
let i = 0;
 
/* Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})

btnLeft.addEventListener("click", function () {
 
})*/

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btnRight').addEventListener('click', function(){
    offset = offset + 760;
    if (offset > 2280){
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});

document.querySelector('.btnLeft').addEventListener('click', function(){
    offset = offset - 760;
    if (offset < 0){
        offset = 2280;
    }
    sliderLine.style.left = - offset + 'px';
})