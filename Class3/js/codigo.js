
const palabras = document.querySelector('#randon');
const boton = document.querySelector('#btn')

function cargar() {
    $.getJSON('https://api.chucknorris.io/jokes/random', function (datos) {
        console.log(datos);
        palabras.textContent = datos.value;
    });
}
cargar();
boton.addEventListener('click', function () {
    cargar();
})