let matriz =[[1,2,3],[4,5,6],[7,8,9]];
let num,nuevaMatriz;

console.log("Esta es la matriz: \n"+matriz)
num = validar(Number(prompt("Fila deseada para salir: ")));
nuevaMatriz = sacarFila(num);
console.log("Matriz con la fila fuera \n"+matriz);
console.log("fila que salio \n"+nuevaMatriz);


function validar(num){
    while (num > matriz.length || num <= 0){
        console.log("El numero no es valido");
        num=Number(prompt("Fila deseada para salir: "));
    }
    return num;
}

function sacarFila(num){
    nuevaMatriz=matriz.splice(num-1,1);
    return nuevaMatriz;
}