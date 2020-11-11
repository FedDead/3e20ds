let array=new Array(10);                                                     //  Definimos el array que usaremos y su tamaño.
for(let i=1;i<=10;i++){  
    array[i]=Math.round(Math.random()*(1-10)+10);                          //  Almaceno numeros aletorios en la variable "aletoria" con las funciones math.round y random del 1 al 10.
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array.
}