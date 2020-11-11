let n=1;                                // Declaramos una variable para saber la serie en la que va.
for(let i=0;;i++){                     // Ciclo for para imprimir los numeros hasta que este se rompa.
    if(i%2==1){                       //Condicion para solo tomar los numeros impares.
        if(n%2==1){                  //Condicion que imprimira cuando "n" sea impar, esto nos dira cuando multiplicar i por -1.
            console.log(i*-1);
        }
        else if (n%2==0){           // Condicion que imprimira cuando "n" sea par, esto nos ayudara imprimirlo sin multiplicar por el -1.
            console.log(i);
        }
    n++;                          // Incremento de "n".
    }
    if(n>10){
        break;                  // Rompe el ciclo for cuando llega a las 10 series.
    }
}