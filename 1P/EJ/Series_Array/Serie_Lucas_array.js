let L1=2,L2=1,T=1;                                                                //  Declaramos las variables que usaremos.
let array=new Array(10);                                                         //  Definimos el array que usaremos y su tamaño.
array[1]=L1;   
for(let i=2;i<=10;i++){                                                        //    Comenzamos con el ciclo for para conseguir las 10 series de Lucas.
    array[i]=T;                                                               //  Guardamos los valores de T en el array  
    T=L1+L2;                                                                 //  Sumamos las variables.
    L1=L2;                                                                  //   Sustituimos el valor de L1 por el L2 para guardar el valor pasado de la primera sucesion.
    L2=T;                                                                  //    Sustituimos el valor L2 que era es primer valor por el T que es el valor de la siguiente sucesion.
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array.
}