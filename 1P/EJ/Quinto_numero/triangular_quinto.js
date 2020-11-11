let T=1,N=1;    //  Declaramos la variables que usaremos para la formula de la serie triangulo
for(let i=1;i<=5;i++){
    N=i;
    T=((N)*(N+1))/2;    //  Formula para sacar la serie triangular
   if(i==5){
        console.log(T);
   }
}