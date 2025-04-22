/*
3.- Escribe un programa que imprima en la consola los números del 1 al 100, 
pero siguiendo estas reglas:
Si el número es múltiplo de 3, imprimir "Fizz".
Si es múltiplo de 5, imprimir "Buzz".
Si es múltiplo de ambos, imprimir "FizzBuzz".
Si no es múltiplo de ninguno, imprimir el número.

*/


for (let index = 1; index <= 100; index++) 
    {   
        if ((index % 3 == 0) && (index % 5 == 0))
        {
            console.log(" FizzBuzz");
        }
        else if (index % 3 == 0)  
        {
            console.log(" Fizz");
        }
        else if (index % 5 == 0)
        {
            console.log(" Buzz");
        }
        else
        {
            console.log(index);
        }
    }