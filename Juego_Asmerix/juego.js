function asmerixGame() {
    console.log("¡Bienvenido a las 4 pruebas de Asmerix!");
    let nivel = 1;
console.log("Nivel 1: Dados");
let dado1 = Math.floor(Math.random() * 12) + 1;
let dado2 = Math.floor(Math.random() * 12) + 1;
let suma = dado1 + dado2;
console.log(`Lanzaste ${dado1} y ${dado2}. La suma es: ${suma}`);
    if (suma <= 15) {
        console.log("Dedícate a otra cosa");
        return;
    }
    nivel++;
console.log("Nivel 2: Número Oculto");
let numeroOculto = Math.floor(Math.random() * 5) + 1;
let intentos = 2;
let acierto = false;
    while (intentos > 0) {
        let respuesta = parseInt(prompt("Adivina el número oculto entre 1 y 5:"));
        if (respuesta === numeroOculto) {
            acierto = true;
            break;
        }
        intentos--;
        console.log(`Intento fallido. Te quedan ${intentos} intentos.`);
    }
    if (!acierto) {
        console.log("Eres malilla");
        return;
    }
    nivel++;
console.log("Nivel 3: Clave Binaria");
let clave = Math.floor(Math.random() * 8).toString(2).padStart(3, "0");
    intentos = 3;
    acierto = false;
    while (intentos > 0) {
        let respuesta = prompt("Adivina la clave binaria de 3 bits:");
        if (respuesta === clave) {
            acierto = true;
            break;
        }
        intentos--;
console.log(`Intento fallido. Te quedan ${intentos} intentos.`);
    }
    if (!acierto) {
        console.log("Eres buenicillo");
        return;
    }
    nivel++;
console.log("Nivel 4: Boss");
let pregunta = "¿Que dia son los reyes magos?";
let respuestaCorrecta = 6;
let respuestaFinal = parseInt(prompt(pregunta));

    if (respuestaFinal === respuestaCorrecta) {
        console.log("You are the Best");
    } else {
        console.log("Eres grande");
    }
}
asmerixGame();
