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
console.log(menor4(4,2,-6,20));