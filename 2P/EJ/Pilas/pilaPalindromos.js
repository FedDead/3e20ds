function Stack() {
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

function palindromo(word) {   // Funcion para saber si una palabra es palindromo
    let stack = new Stack();
    for (let i = 0; i < word.length; ++i) {
        stack.push(word[i]);
    }
    var rword = "";
    while (stack.length() > 0) {
        rword += stack.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}

function validar(palabra){  // Funcion para validar que la palabra no sea nula
    while (palabra.length <= 0){
        console.log("No hay ningun letra ");
        palabra = prompt("Escribe el palindromo: ");
    }
    return palabra;
}

let palabra = validar(prompt("Escribe el palindromo: "));
if(palindromo(palabra))
    console.log(palabra + " es palindromo");
else
    console.log(palabra + " no palindromo");