let n=1;                             //  Declaramos la variable que contara nuestras iteraciones.
let array=new Array(10);            //  Definimos el array que usaremos y su tamaño.
for(let i=1;;i++){                 //   Usamos el ciclo for para generar numeros hasta que consigamos las 10 iteraciones.
    if(n>10){                     //   Al conseguir las 10 iteraciones rompe el ciclo for.
        break;
    }              
    else if(i%2==1){            //  Si no hemos conseguido todavia las 10 iteraciones con la  condicion verificamos si el numero es impar.
        array[n]=i;            //   Guardamaos los valores del array.
        n++;
    }
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array
}