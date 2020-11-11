console.log("Escribe el numero maximo: ");
let stdin = process.openStdin();
stdin.addListener("data", function(d) {
    for(let i=0;i<d;i++){  
        let aleatorio=Math.round(Math.random()*d);      //  Almaceno numeros aletorios en la variable "aletoria" con las funciones math.round y random del 1 al 10.
        console.log(aleatorio);
    }
});
