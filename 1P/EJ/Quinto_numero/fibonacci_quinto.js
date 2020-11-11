let f1=0,f2=1,total=1;               // Declaramos las variables que vamos a usar.                    
for(let i=1;i<4;i++){              // Ciclo for que nor permitira imprimir las 9 series.
    total=f1+f2;                   // Suma las variables f1 y f2.
    f1=f2;                        // Sustituye el valor de f1 por el de f2.
    f2=total;                    // Sustituye el valor de f2 por el de total.
    if(i==3){
        console.log(total);
    }
}
