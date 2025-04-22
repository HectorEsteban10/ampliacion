/*
2.- Escribe una función llamada invertirArray 
que reciba un array y devuelva un nuevo array 
con los elementos en orden inverso, 
sin usar el método reverse(). 
Ejemplo de entrada: ["a", "b", "c", "d"] 
                    0      1    2   3
Salida esperada: ["d", "c", "b", "a"]
*/

function invertirArray(mi_array) 
{
    let array_invertido = [];
    for (let index = mi_array.length-1; index >=0; index--) 
    {
        array_invertido.push(mi_array[index]);   
    }
    return array_invertido;
}

let aEjemplo = invertirArray(["a", "b", "c", "d"]);
console.log(aEjemplo);