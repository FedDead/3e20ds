const S=[3,1,4,2,3];
let prom=0;
for(let i=0;i<S.length;i++){
    prom+=S[i];   
}
prom=prom/S.length;
console.log(prom);
console.log("Tiene una complejidad computacional lineal");