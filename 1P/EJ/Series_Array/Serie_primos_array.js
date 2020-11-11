let n=0;                                                                            //  Declaramos la variable donde se guardara las iteraciones.
let array=new Array(10);                                                           //  Definimos el array que usaremos y su tamaño.
for(let i=2;;i++){                                                                //  Utilizamos un for para generar numeros de 2 hasta que n alcance las 10 iteraciones.
    if(primo(i)){                                                                //  Utilizamos una condicion para verificar que el valor que le demos a la funcion es primo.
        array[n]=i;                                                             //  Guardamos los valores de i en el array
    }   
    if(n>10){                                                                 //  Rompe el ciclo for cuando conseguimos nuestras 10 iteraciones.
        break;
    }
}

function primo(num){            // Funcion para saber si el numero es primo.
    for(let i=2;i<num;i++){     
        if(num%i===0){          //Comprueba si el numero es primo.
            return false;       //En caso de que no lo sea retorno un false.
        }
    }
    n++;
    return num !==1;            // En caso de que si sea se retorno el valor inicial que usamos en la funcion.
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array
}
