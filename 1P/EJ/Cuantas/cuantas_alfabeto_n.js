const n=6,r=6;
let total;
total=factorialRecursivo((n+r-1))/(factorialRecursivo(r)*factorialRecursivo((n-1)));
console.log("Las combinaciones posiblesc con repeticion con la formula (n+r-1)!/r!(n-1)! son: "+total);
function factorialRecursivo (n) { 
	if (n == 0 || n==1){ 
		return 1; 
	}
    return n * factorialRecursivo (n-1); 
}