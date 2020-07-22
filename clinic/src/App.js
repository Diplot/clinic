
/*Tabs mrt/KT */
$(function () {
    $("#tabs").tabs();
});
/* Индекс слайда по умолчанию */
var art = 1;
showArt(art);
/*Добавления слушателя на кнопку*/
$('#nextArt').click(nextArt);
$('#previousArt').click(previousArt);
$('#nextCom').click(nextCom);
$('#previousCom').click(previousCom);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextArt() {
    showArt(art += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function previousArt() {
    showArt(art -= 1);
}
/* Основная функция слайдера */
function showArt(n) {
    var i;
    var slidesArt = document.getElementsByClassName("item");
    if (n > slidesArt.length) {
        art = 1
    }
    if (n < 1) {
        art = slidesArt.length
    }
    for (i = 0; i < slidesArt.length; i++) {
        slidesArt[i].style.display = "none";
    }
    slidesArt[art-1].style.display = "block";
}

/*Слайдер комментариев*/
var com = 1;
showCom(com);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextCom() {
    showCom(com += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function previousCom() {
    showCom(com -= 1);
}
/* Основная функция слайдера */
function showCom(n) {
    var i;
    var slidesCom = document.getElementsByClassName("item-com");
    if (n > slidesCom.length) {
        com = 1
    }
    if (n < 1) {
        com = slidesCom.length
    }
    for (i = 0; i < slidesCom.length; i++) {
        slidesCom[i].style.display = "none";
    }
    slidesCom[com-1].style.display = "block";
}


/* формула из scss*/
let setBorder= (even , odd)=>{
    for (let i =1 ; i<=18; i++){
        let generateColor =()=>{
            let r = Math.floor(Math.random()*(255)).toString(16),
                g = Math.floor(Math.random() * (255)).toString(16),
                b = Math.floor(Math.random() * (255)).toString(16)

            let color = '#'+r+g+b;
            while(color.length <7){ //без этого может сгенерироватся значения, которые браузер не распознает как цвет.
                color+=Math.floor(Math.random() * (15)).toString(16);
            }
            return color
        }
        let $color = generateColor();
        let elem = document.getElementById('item-'+i);
        if((i % 2) === 0) {
            elem.style.border = even + ' solid ' +$color
        }
        else {
            elem.style.border = odd + ' solid ' + $color
        }
    }
    return;
}
setBorder('4px','2px');

let rgb=()=>{
    let r = Math.floor(Math.random()*(256));
    let g = Math.floor(Math.random()*(256));
    let b = Math.floor(Math.random()*(256));
    return '#'+r+g+b
}
/* меняем цвет кнопки по нажатию на заказе*/
$('.clinic__bottom_button').click(function () {
    $(this).css('backgroundColor', rgb).off('click')
});


