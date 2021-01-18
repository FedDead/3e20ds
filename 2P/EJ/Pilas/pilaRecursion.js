function Stack() {  // Para crear la pila
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function length() {
    return this.top;
}

function fact(n) { //  Funcion para hacer factorial con una pila
    let stack = new Stack();
    while (n > 1) {
        stack.push(n--);
    }
    let product = 1;
    while (stack.length() > 0) {
        product *= stack.pop();
    }
    return product;
}

function validar(num){
    while (num <= 0){
        console.log("El numero no es valido");
        num = Number(prompt("Escribe el numero que deseas conocer el factorial: "));
    }
    return num;
}

let num = validar(Number(prompt("Escribe el numero que deseas conocer el factorial: ")));
console.log("El factorial de " + fact(5));