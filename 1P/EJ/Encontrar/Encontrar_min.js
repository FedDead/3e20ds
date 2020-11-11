const S=[3,1,4,2,3];
let min=100;
for(let i=0;i<=S.length;i++){
    for(let j=0;j<=S.length-i;j++){
        if(S[j]<min){
            min=S[j]
        }
    }
}
console.log(min)
console.log("Tiene una complejidad computacional lineal");