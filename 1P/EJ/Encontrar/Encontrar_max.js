const S=[3,1,4,2,3];
let max=0;
for(let i=0;i<=S.length;i++){
    for(let j=0;j<=S.length-i;j++){
        if(S[j]>max){
            max=S[j]
        }
    }
}
console.log(max)
console.log("Tiene una complejidad computacional lineal");