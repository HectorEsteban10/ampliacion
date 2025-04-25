/*

5.- Dado el siguiente array:
const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begoña"];
Escribe el código para intercambiar los valores de las posiciones 2 y 3, 
independientemente de lo que contenga en esas posiciones.

*/

const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begoña"];

let aux = aPersonas[1];

aPersonas[1] = aPersonas[2];

aPersonas[2] = aux;

console.log(aPersonas);