/*

9.-
<html>
…
<button id="miBoton">Dame!</button>
    <p id="miParrafo">mi parrafo</p>
…
</html>

<script>
// escribe aquí el código 
// javascript que al pulsar al 
// botón con id=miBoton ponga en 
// verde el // texto “guay del para” en el 
// párrafo con id=miParrafos
</script>
 
*/

const miBotonX = document.getElementById("miBoton");

miBotonX.addEventListener ( 'click', () => {

let parra = document.getElementById("miParrafo");

parra.style.color="green";

});