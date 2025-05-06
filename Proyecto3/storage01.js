
localStorage.setItem('nombre','Movil_de_Raul');

localStorage.setItem('nombre2','Album_de_Brito');

//alert(localStorage.getItem('nombre2'));


let aFrutas = ['kiwi','movil_de_raul','fruta del dragón'];

console.log(aFrutas);

localStorage.setItem('arrayFrutas',JSON.stringify(aFrutas));


let otrasFrutas = JSON.parse(localStorage.getItem('arrayFrutas'));

console.log(otrasFrutas);