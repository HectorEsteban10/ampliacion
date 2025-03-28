var nNum = 30;
console.log ("el valor de nNum es "+nNum);

nNum = nNum +1;
console.log ("el valor de nNum es "+nNum);


nNum = nNum +5;
console.log ("el valor de nNum es "+nNum);

nNum++; // es lo mismo exactamente nNum = nNum +1;
console.log ("el valor de nNum es "+nNum);

nNum = nNum -1;
console.log ("el valor de nNum es "+nNum);

nNum--;// es lo mismo exactamente nNum = nNum -1;
console.log ("el valor de nNum es "+nNum);

// objeto o registro

let objetoAlumno = {
    nombre: "bego"
    cod_alumno: 46735
};

console.log(objetoAlumno);
console.log("el codigo del alumno es "+objetoAlumno.nombre);
console.log("el codigo del alumno es "+objetoAlumno.cod_alumno); 

objeto aula 

let objetoAula = {
    numero_mesas : 32,
    nombre : "ASIR1",
    numero_perchas : 15
};

// sumar en una variable las mesas mas las perchas


var mo = objetoAula.numero_mesas + objetoAula.numero_perchas;



console.log(" mo es " +mo)