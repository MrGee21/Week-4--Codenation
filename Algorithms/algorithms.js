let d = 3; /* */
let m = 7;
let y = 1991;

let f,l,s,x;

if (m<3){
    m=m +12;
    y=y-1;
}

f = Math.floor(y/100);
l = y - 100 * f;
s = Math.floor(2.6 * m - 5.39) + Math.floor(1/4) +
Math.floor(f/4) + d + l - 2 * f;

x = s - (7 * Math.floor(s/7));

console.log(x);