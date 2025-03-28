let aNumeroDePie = [12,35,47,48];

//console.log(aNumeroDePie[0]);

//console.log(aNumeroDePie[2]);

for (let index = 0; index < aNumeroDePie.length; index++)
{
    console.log(index + " , " + aNumeroDePie[index]);

    
}

aNumeroDePie.push(38);
console.log("Después");

aNumeroDePie.forEach((valor,indice) =>
{
    console.log(indice+ ": " +valor);
});

let ultimoElemento = aNumeroDePie.pop();

console.log("Después de después");

aNumeroDePie.forEach((valor,indice) =>
{
console.log(indice + ": " + valor);
});

console.log("El ultimo elemento fue " + ultimoElemento);


const aPersonas = ["José","Chema","Pepe","Bartolito","Begoña"];
aPersonas[0] = "Josito";

aPersonas.forEach((valor,indice) =>
{
    console.log(indice + ": " + valor);
});
//intercambiar el valor de la posicion 2 y 3, independientemente de los valores.

console.log("*************************")
let aux;
aux = aPersonas[2];
aPersonas[2] = aPersonas[3];
aPersonas[3] = aux;

aPersonas.forEach((valor,indice) =>
{
    console.log(indice + ": " + valor);
});

console.log(aPersonas);

aPersonas.sort(); // por defecto, orden alfanumerico

console.log(aPersonas);

let aNumerosPotencias2= [32,64,128,16,8,4,2,1] 

aNumerosPotencias2.sort();

console.log(aNumerosPotencias2);

aNumerosPotencias2.sort((a,b)=> a - b);

console.log(aNumerosPotencias2);

let fila1 = [1,2];
let fila2 = [5,7];

let matriz1 = [fila1,fila2];

let matriz2 = [fila1,fila2];

console.log (matriz1);

console.log (matriz2);

for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++)
    {
        console.log ("valor:"+fila[i]);
    }
}

//incrementar todos los elementos de la matriz en 1

for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++)
    {
        fila[i];
    }
}
for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++)
    {
        console.log ("valor:"+fila[i]);
    }
}

//incrementar en 2

for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++)
    {
        fila[i];
    }
}
for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++)
    {
        console.log ("valor:"+fila[i]);
    }
}

function imprimirMatriz(miMatriz){
    for (let index = 0; index < miMatriz2.length; index++) 
        {
            const fila = miMatriz[index];
            for (let i = 0; i < fila.length; i++)
            {
                console.log ("valor:"+fila[i]);
            }
        }

}




