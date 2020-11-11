let T=1,N=1;                                                                  //  Declaramos la variables que usaremos para la formula de la serie triangulo.
let array=new Array(10);                                                     //  Definimos el array que usaremos y su tamaño.
for(let i=1;i<=10;i++){
    N=i;
    T=((N)*(N+1))/2;                                                       //  Formula para sacar la serie triangular.
    array[i]=T;                                                           //  Guardamos los valores de T en el array. 
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array.
}
