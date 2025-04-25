/*

8.- Escribe la función que devuelva el lanzamiento
 de un dado de 10 caras.

*/

function dado10() 
{
    return Math.floor(Math.random()*10)+1;    
}

console.log(dado10());