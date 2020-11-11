const S=[3,1,4,2,3];
for(let i=0;i<=S.length-1;i++){
    for(let j=i+1;j<=S.length;j++){
        if(S[i]==S[j]){
            console.log("El numero que se repite es el "+S[i]);
        }
    }
}
console.log("Tiene una complejidad computacional cuadratico");