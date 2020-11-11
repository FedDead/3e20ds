let array=new Array(10);                                                                               //  Definimos el array que usaremos y su tamaño.
for(let i=1;i<=10;i++){
    array[i]=factorial(i);                                                                           // LLamamos a la funcion factorial y el resultado lo guardamos en el array.
}
    
function factorial(num){                                                                           // Saca el factorial del valor introducido.
    var total=1;
    for(let i=1;i<=num;i++){                                                                     //  Se utiliza el for para conseguir los numeros que se iran multiplicando en la sucesion.
        total=total*i;                                                                          //  Se multiplica los numeros iniciales hasta llegar al valor ingresado.
    }
    return total;                                                                              //   Retorna el valor.
}
for(let i=1;i<=10;i++){
        console.log("Nuestro array en la posicion ["+i+"] factorial de "+i+"!="+array[i]);   // Mostramos los valores del array.
}