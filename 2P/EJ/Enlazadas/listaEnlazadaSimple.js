class Node{
    constructor(data, next){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor() {
        this.head=null;
        this.size=0;
    }

    add(data){
        const newNode= new Node(data,null); //  Creamos un nuevo nodo
        if(!this.head){   // Verifica si la cabeza esta vacia es decir si no hay cabeza el nodo que introducimos es el primer elemento
            this.head=newNode;
        }
        else{   // Del lado contrario si ya hay una cabeza es decir ya tenemos algun nodo metere al nodo al ultimo lugar
            let current = this.head; // Mantenemos registro del valor actual de la cabeza
            while(current.next){  // Mientras la cabeza tenga una referencia al siguiente nodo
                current=current.next; //    Convertimos el valor actual de la cabeza al valor siguiente de la cabeza
            }
            current.next=newNode; // Al saber la posicion donde debemos poner el nuevo nodo lo creamos

        }
        this.size++;
    }
    print(){    // Metodo que me permite imprimir de manera mas "bonita" el nodo
        if(!this.size){     //Comprobamos que el tamaño para si no hay ningun nodo retorne null
            return null;
        }
        let current = this.head;    // Mantenemos el valor de la cabeza
        let result = '';            //  Creamos una varibale donde se ira guardando los valores de nuestro nodo
        while(current){             //  Mientras haya nodos se iran guardando en nuestra variable result
            result += current.data += '->'; // Agregamos los valores de los nodos a la varibale con una flechita para que se vea mas Bonito
            current = current.next;         // Apuntamos la siguiente nodo
        }
        result += 'X';              // Agregamos una X al final a la variable para demostrar que es el final del nodo
        return result;              // Retornamos el result
    }
}

const linkedList = new LinkedList();  // creamos nuestra lista enlazada
linkedList.add(12);     //  Agregamos el valor 12 a la lista enlazada
linkedList.add('paco');     //  Agregamos el valor 'paco' a la lista enlazada
linkedList.add('rocio');    //  Agregamos el valor 'rocio' a la lista enlazada
console.log(linkedList.print()) //  Usamos el metodo imprimir para imprimir el nodo de manera mas bonita
console.log(linkedList);    // Imprimimos el nodo