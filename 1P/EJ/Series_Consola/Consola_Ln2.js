console.log("Cuantas series de numeros deseas: ");
let n=process.openStdin();
n.addListener("data",function(n){
    console.log("-------------------------------\n1");
    for(let i=2;i<=n;i++){
        if(i%2==1){
            console.log("-1/"+i);
        }
        if(i%2==0){
            console.log("+1/"+i);
        }
    }
});