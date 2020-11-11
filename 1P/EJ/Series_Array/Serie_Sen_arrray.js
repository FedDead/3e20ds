let Tot=0;                                                                             //  Declaramos la variables que usaremos para guardar los valores de seno.
let array=new Array(10);                                                              //  Definimos el array que usaremos y su tamaño.
for(let i=1;i<=10;i++){
    Tot=i;                                                                           //   Guardamos el valor de i en Tot para que este en constante cambio.
    array[i]=Math.sin(Tot);                                                         //    Usamos la funcion math.sin para calcular el seno y lo guardamos en variable Tot.
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] seno de"+i+"="+array[i]);   // Mostramos los valores del array.
}