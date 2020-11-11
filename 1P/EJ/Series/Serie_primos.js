let n=0;                            //  Declaramos la variable donde se guardara las iteraciones.
for(let i=2;;i++){              //  Utilizamos un for para generar numeros de 2 hasta que n alcance las 10 iteraciones.
    if(primo(i)){           //  Utilizamos una condicion para verificar que el valor que le demos a la funcion es primo.
        console.log("Los numeros primos de la sucesion ["+n+"] es "+i);
    }   
    if(n>=10){          //  Rompe el ciclo for cuando conseguimos nuestras 10 iteraciones.
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

