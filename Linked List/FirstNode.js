class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }  
}
function main(){
    const a = new Node(10); //head
    const b = new Node(20);
    const c = new Node(30);
    const d = new Node(40);
    a.next = b;
    b.next = c;
    c.next = d;
    
    
    console.log(a.next.data);
    return 0;
}
main();