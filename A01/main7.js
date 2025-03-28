
// numero aleatorio entre 1 y 13
let numero_aleatorio = Math.floor(Math.random() * 13) + 1;
if (numero_aleatorio > 10)
{
    numero_aleatorio=10;
}

let numero_aleatorio2 = Math.floor(Math.random() * 13) + 1;
if (numero_aleatorio2 > 10)
{
        numero_aleatorio2=10;
}
    
console.log ("Tus cartas son "+numero_aleatorio+","+numero_aleatorio2);

let palabro = prompt ("Carta mas(c) o Plantarse(p)");



if (palabro == "p")
{
    console.log ("El jugador se planta");
}
else if (palabro == "c")
{
    console.log ("El jugador continua");
}
else
{
    console.log ("Por favor, introduce: Carta mas(c) o Plantarse (p)")
}