

function init()
{
const miBotonX = document.getElementById("iBu");

miBotonX.addEventListener ( 'click', () => {

    let miClave = document.getElementById("iClave").value;
    let miValor = document.getElementById("iValor").value;
    localStorage.setItem(miClave,miValor);

});
}