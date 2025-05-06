// Guardar un dato simple
localStorage.setItem('nombre', 'Juan');

// Recuperar el dato
let nombre = localStorage.getItem('nombre');
console.log(nombre); // "Juan"


// Guardar un array
let frutas = ['manzana', 'banana', 'naranja'];
localStorage.setItem('frutas', JSON.stringify(frutas));

// Recuperar el array
let frutasRecuperadas = JSON.parse(localStorage.getItem('frutas'));
console.log(frutasRecuperadas); // ["manzana", "banana", "naranja"]


// Guardar un objeto
let usuario = {
    nombre: 'Ana',
    edad: 30,
    activo: true
  };
  localStorage.setItem('usuario', JSON.stringify(usuario));
  
  // Recuperar el objeto
  let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
  console.log(usuarioRecuperado); // {nombre: "Ana", edad: 30, activo: true}
  

  localStorage.clear(); // borra todo
  localStorage.removeItem('clave'); // borra un ítem específico