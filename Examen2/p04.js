/*
*/

function menor2(a,b)
{
    if (a<b) return a;
    else return b;
}

//console.log (menor2(4,5));

function menor4(a,b,c,d)
{
    let m1 = menor2(a,b);
    let m1 = menor2(c,d);

    return menor2(m1,m2);

}
// console.log(menor4(4,2,-6,20));


function menor16(a,b,c,d,e,f,g,h,i,j,k,l,o,m,n,o,p)
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,p);

    return menor4(m1,m2,m3,m4)
}

console.log(menor16(4,2,-6,20,4,2,-6,20,4,2,-666,20,4,2,-6,20));
 