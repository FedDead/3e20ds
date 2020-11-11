let array=new Array(1000000);                                                     //  Definimos el array que usaremos y su tamaño.
let cont=0;
console.time();
for(let i=1;i<=1000000;i++){  
    array[i]=Math.round(Math.random()*(1-1000000)+100000);                          //  Almaceno numeros aletorios en la variable "aletoria" con las funciones math.round y random del 1 al 100,000.
}
const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
          cont++;
        }
      }
    }
  
    return arr;
  };
  const result=bubbleSort(array);
for(let i=1;i<=1000000;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+result[i]);   // Mostramos los valores del array.
}
console.log("Las inmersiones fueron: "+cont);
console.log("Se puede mejorar el tiempo si en vez hacer un ordenamiento iterativo lo hacemos recursivo");
console.log("El tiempo promedio es 1:42:30");      // Saque el tiempo promedio ejecutandolo 5 veces y diviendolo entre esa cantidad
console.timeEnd();