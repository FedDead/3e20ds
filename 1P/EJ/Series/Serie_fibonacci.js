let f1=0,f2=1,total=1;               // Declaramos las variables que vamos a usar.
console.log(f1);                    
for(let i=1;i<10;i++){              // Ciclo for que nor permitira imprimir las 9 series.
    console.log(total); 
    total=f1+f2;                   // Suma las variables f1 y f2.
    f1=f2;                        // Sustituye el valor de f1 por el de f2.
    f2=total;                    // Sustituye el valor de f2 por el de total.
}
