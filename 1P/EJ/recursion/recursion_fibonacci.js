for(let i=0;i<=9;i++){
    console.log("Fibonacci "+(i+1)+" es "+fibonaccirecursivo(i));
}
function fibonaccirecursivo(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    return fibonaccirecursivo(n-1)+fibonaccirecursivo(n-2);

}