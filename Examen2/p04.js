/*
4.- Escribe las funciones menor4 y menor16: 
menor4: recibe como parámetros de entrada 4 números y devuelve el menor de esos cuatro números.
menor16: recibe como parámetros de entrada 16 números y devuelve el menor de esos 16 números
 */

function menor2(a,b) 
{
    if (a<b) return a;
    else return b;
}

//console.log(menor2(4,2));

function menor4(a,b,c,d) 
{
    let m1 = menor2(a,b);
    let m2 = menor2(c,d);
    
    return menor2(m1,m2);
    //return menor2(menor2(a,b),menor2(c,d));
}

//console.log(menor4(4,2,-6,20));


function menor16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) 
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,p);

    return menor4(m1,m2,m3,m4);
    
}

//console.log(menor16(4,2,-6,20,4,2,-6,20,4,2,-666,20,4,2,-6,20));

function menor3(a,b,c) 
{
    let r1 = menor2(a,b);
    return menor2(r1,c);
}


function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) 
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor3(m,n,o);
    return menor4(m1,m2,m3,m4);  
}

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) 
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,m3);
    return menor4(m1,m2,m3,m4);  
}

