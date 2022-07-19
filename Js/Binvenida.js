
const caja1 = document.getElementById('caja_1');
const caja2 = document.getElementById('caja_2');
const caja3 = document.getElementById('caja_3');
const info = document.getElementById('baner--info');

const carga_efecto1 = (entradas, observador) => {
      
    //console.log(entradas);
    entradas.forEach((entrad) => {
        if (entrad.isIntersecting) {
           
         
            entrad.target.classList.add('visible_caja_1');    
        }
        else {
            entrad.target.classList.remove('visible_caja_1'); 
            
        }
    });

}


const carga_efecto2 = (entradas, observador) => {
    //console.log(entradas);
    entradas.forEach((entrad) => {
        if (entrad.isIntersecting) {
            // console.log(entrad.target);
            entrad.target.classList.add('visible_caja_2');
        }
        else {
            entrad.target.classList.remove('visible_caja_2');
        }
    
    });

}
const carga_efecto3 = (entradas, observador) => {
    //console.log(entradas);
    entradas.forEach((entrad) => {
        if (entrad.isIntersecting) {
            // console.log(entrad.target);

            entrad.target.classList.add('visible_caja_3');
        }
        else {
            entrad.target.classList.remove('visible_caja_3');
        }
    });
}

const carga_info = (entradas, observador) => {
    entradas.forEach((entrad) => {
       // console.log(entrad.target);

            if (entrad.isIntersecting) {
                // console.log(entrad.target);
                setTimeout(function () {

                entrad.target.classList.add('Visible--info');
            }, 500);
            }
            else {
                entrad.target.classList.remove('Visible--info');
            }
        });
  
}

const observador1 = new IntersectionObserver(carga_efecto1, {
    
    root: null,
    rootMargin: '100px 400px 100px 1200px',
    threshold: 1.0


});
const observador2 = new IntersectionObserver(carga_efecto2, {

    root: null,
    rootMargin: '100px 400px 100px 1200px',
    threshold: 1.0


});
const observador3 = new IntersectionObserver(carga_efecto3, {

    root: null,
    rootMargin: '100px 400px 100px 1200px',
    threshold: 1.0


});
const observador4 = new IntersectionObserver(carga_info, {

    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0


});

observador1.observe(caja1);
observador2.observe(caja2);
observador3.observe(caja3);
observador4.observe(info);