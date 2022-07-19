const slider = document.querySelector("#slider--info");
let slider_section = document.querySelectorAll(".slider--section--info");
let sliderSectionLast = slider_section[slider_section.length - 1];

const btnLeft = document.querySelector("#slider--info--btn--left");
const btnRight = document.querySelector("#slider--info--btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function NextInfo() {
    let sliderSectio1 = document.querySelectorAll(".slider--section--info")[0];
    let sliderSectio2 = document.querySelectorAll(".slider--section--info")[1];
    let sliderSectio3 = document.querySelectorAll(".slider--section--info")[2];


    console.log(sliderSectio2.classList);
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.3s";
    //sliderSectio2.classList.add("flotar");
    //sliderSectio1.classList.remove("flotar");
    //sliderSectio3.classList.remove("flotar");
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectio1);
        slider.style.marginLeft = "-100%";
    }, 300);

}

function PrevInfo() {
    let slider_section = document.querySelectorAll(".slider--section--info");
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
    NextInfo();

});


btnLeft.addEventListener('click', function () {
    PrevInfo();

});

setInterval(() => {
    NextInfo();
}, 30000);