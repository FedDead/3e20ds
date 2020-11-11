const n=[3,1,4,2,3];
function Po(n){
    return n.reduce((a,v)=>a.concat(a.map(d=>[v].concat(d))),[[]]);
}

console.time();
Po(n);
console.timeEnd();
console.log("Complejidad exponencial\n");
console.log(Po(n));