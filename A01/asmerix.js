
/************************NIVEL 1*********************************/

const sumaDosDados = Math.floor(Math.random()^23) + 2;  // entre 2 y 24
console.log("Tiras los dados y sacas"+sumaDosDados);
if (sumaDosDados>15)
{
    console.log("Enhorabuena Nivel 2");    
/************************NIVEL 2*********************************/
const numeroOculto = Math.floor(Math.random() * 5);  // entre 1 y 5
let numeroJugador = prompt("Acierta un numero entre 1 y 5 ambos incluidos");
console.log("numeroOculto:"+numeroOculto);    
console.log("numeroJugador:"+numeroJugador); 
if (numeroOculto != numeroJugador)
    {
        numeroJugador = prompt("2ª oportunidad, Acierta un numero entre 1 y 5 ambos incluidos");
        if (numeroOculto != numeroJugador)
        {
            console.log("GAME OVER Eres Malill@!");
        }
        else
        {
            ok=true;
        }
    }   
    else
    {
        ok=true;
    }
    if (ok)
    {
        console.log("ENHORABUENA NIVEL 3");
        /************************NIVEL 3*********************************/
        const bit1 = Math.floor (Math.random() * 2);// o 1 o 0
        const bit2 = Math.floor (Math.random() * 2);// o 1 o 0
        const bit3 = Math.floor (Math.random() * 2);// o 1 o 0
        const clave3bits = "" + bit1 + bit2 + bit3;
        console.log
    }
}
else
{
    console.log("GAME OVER Dedicate a otra cosa")
}