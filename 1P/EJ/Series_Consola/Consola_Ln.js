console.log("Cuantas series de numeros deseas: ");
let n=process.openStdin();
n.addListener("data",function(n){
    console.log("-------------------------------\nX");
    for(let i=2;i<=n;i++){
        if(i%2==1){
            console.log("-X^"+i+"/"+i);
        }
        if(i%2==0){
            console.log("+X^"+i+"/"+i);
        }
    }
});

/*console.log("Cuantas series de numeros deseas: ");
let n=process.openStdin();
n.addListener("data",function(n){
    console.log("Cuanto vale X: ");
    let x=process.openStdin();
    x.addListener("data",function(n2){
    console.log(n2);
    for(let i=2;i<=n;i++){
        if(i%2==1){
            console.log("-"+n2+"^"+i+"/"+i+"\n");
        }
        if(i%2==0){
            console.log("+"+n2+"^"+i+"/"+i+"\n");
        }
    }
    });
});
*/
