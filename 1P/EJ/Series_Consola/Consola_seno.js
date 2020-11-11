let Tot=0;                                                 
console.log("Cuantas series de numeros deseas: ");
let n=process.openStdin();
n.addListener("data",function(n){
    for(let i=1;i<=n;i++){
        Tot=i;                                                 
        Tot=Math.sin(Tot);                                   
        console.log("El seno de "+i+" es "+Tot);
    }
});