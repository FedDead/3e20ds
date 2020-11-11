let Tot=0;
console.log("Escribe cuantas series de numeros tendras: ");
let n = process.openStdin();
n.addListener("data", function(d) {
    console.log("Escribe el numero que sera elevado: ");
    let x=process.openStdin();
    x.addListener("data",function(x2){
        for(let i=1;i<=d;i++){
            Tot=Math.pow(x2,i);                                             //     Usamos la funcion math.pow para elevar nuestra variable y la guardamos en total.
            console.log("El numero "+x2+" es elevado a la "+i+" = "+Tot);
        }
    });
});
