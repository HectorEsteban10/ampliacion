
/*
1.- Crea una función llamada sumarPares que reciba un array de números 
y devuelva la suma de todos los números pares.
Ejemplo de entrada: [1, 2, 4, 4, 5, 6] Salida esperada: 16*/

function sumarPares(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            suma += array[index];
        }
    }
    return suma;
}

$misuma = sumarPares([1,2,3,4,5,6]);
console.log($misuma);