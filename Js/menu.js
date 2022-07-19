let btnMenu =document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click',function(){
    'use strict';
    menu.classList.toggle('mostrar');
});


window.addEventListener("scroll", function () {
    let sectionmenu = this.document.getElementById('section-menu');
    if (window.scrollY > 100) {
        
        sectionmenu.classList.add("menufix");
       // console.log("si")
    }
else {
       // console.log("no");
        sectionmenu.classList.remove("menufix");
    }
});