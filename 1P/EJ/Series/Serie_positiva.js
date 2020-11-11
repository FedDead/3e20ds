let n=0;                            //  Declaramos la variable que contara nuestras iteraciones.
for(let i=0;;i++){                 //   Usamos el ciclo for para generar numeros hasta que consigamos las 10 iteraciones.
    if(i%2==1){                   //    Usamos una condicion para verificar cual numero es impar.
        console.log(i);
        n++;
    }
    if(n==10){                 //   Al conseguir las 10 iteraciones rompe el ciclo for.
        break;
    }
}