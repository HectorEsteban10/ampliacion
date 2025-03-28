
var numObjetivo=12;
let masOpor = 3;
var numJugador;

for (let i =0; i <3 ; i++)
{
    numJugador = prompt("intento nº" + (i+1) + ":dime numero");
    if (numJugador==numObjetivo)
    {
        console.log("EDLB");
        break;
    }
}

let i = 0;
while (i<5)
{
    console.log(i);
    i++;
}