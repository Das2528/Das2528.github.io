const slider = document.querySelector("#slider");
let slider_section = document.querySelectorAll(".slider--section");
let sliderSectionLast = slider_section[slider_section.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider--section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.3s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 300);

}

function Prev() {
    let slider_section = document.querySelectorAll(".slider--section");
    let sliderSectionLast = slider_section[slider_section.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.3s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 300);

}

btnRight.addEventListener('click', function () {
    Next();

});


btnLeft.addEventListener('click', function () {
    Prev();

});

setInterval(()=>{
    Next();
},4000);