for(let i=1;i<=10;i++){
    console.log(i+"!="+factorialRecursivo(i));
}
function factorialRecursivo (n) { 
	if (n == 0 || n==1){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}