class Node{
    constructor(data, next, prev){
        this.data=data;
        this.next=next;
        this.prev=prev;
    }
}

class  DoubleLinkedList{
    constructor() {
        this.head=null
        this.tail=null;
        this.size=0;
    }

    addToHead(data){
        const newNode = new Node(data,this.head, null);
        if(this.head){
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        else{
            this.head=newNode;
            this.tail=newNode;
        }
        this.size++;
    }

    addToTail(data){
        const newNode = new Node(data,null, this.tail);
        if(this.tail){
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
        }
        else{
            this.tail=newNode;
            this.head=newNode;
        }
        this.size++;
    }

    print(){
        let current = this.head;    // Mantenemos el valor de la cabeza
        let result = '';            //  Creamos una varibale donde se ira guardando los valores de nuestro nodo
        while(current){             //  Mientras haya nodos se iran guardando en nuestra variable result
            result += current.data + '<->'; // Agregamos los valores de los nodos a la varibale con una flechita para que se vea mas Bonito
            current = current.next;         // Apuntamos la siguiente nodo
        }
        return result += 'X';
    }
    reversePrint(){
        let current = this.tail;    // Mantenemos el valor de la cola
        let result = '';            //  Creamos una varibale donde se ira guardando los valores de nuestro nodo
        while(current){             //  Mientras haya nodos se iran guardando en nuestra variable result
            result += current.data + '<->'; // Agregamos los valores de los nodos a la varibale con una flechita para que se vea mas Bonito
            current = current.prev;         // Apuntamos la siguiente nodo
        }
        return result += 'X';
    }
}
const doubleLinkedList=new DoubleLinkedList();
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(4);
doubleLinkedList.addToTail(5);
doubleLinkedList.addToTail(6);
doubleLinkedList.addToHead(7);
console.log(doubleLinkedList.print());
console.log(doubleLinkedList.reversePrint());
console.log(doubleLinkedList);