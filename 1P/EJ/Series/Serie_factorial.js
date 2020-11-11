for(let i=1;i<=10;i++){
console.log(i+"!="+factorial(i));        // Imprimimos el resultado de la funcion factorial.
}

function factorial(num){               // Saca el factorial del valor introducido.
    var total=1;
    for(let i=1;i<=num;i++){         //  Se utiliza el for para conseguir los numeros que se iran multiplicando en la sucesion.
        total=total*i;              //  Se multiplica los numeros iniciales hasta llegar al valor ingresado.
    }
    return total;                  //   Retorna el valor.
}