let n=1;                                // Declaramos una variable para saber la serie en la que va.
let array=new Array(10);               //  Definimos el array que usaremos y su tamaño.
for(let i=0;;i++){                    // Ciclo for para imprimir los numeros hasta que este se rompa.
    if(i%2==1){                      //Condicion para solo tomar los numeros impares.
        if(n%2==1){                 //Condicion que imprimira cuando "n" sea impar, esto nos dira cuando multiplicar i por -1.
            array[n]=i*-1;
        }
        else if (n%2==0){           // Condicion que imprimira cuando "n" sea par, esto nos ayudara imprimirlo sin multiplicar por el -1.
            array[n]=i;
        }
    n++;                          // Incremento de "n".
    }
    if(n>10){
        break;                  // Rompe el ciclo for cuando llega a las 10 series.
    }
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array
}