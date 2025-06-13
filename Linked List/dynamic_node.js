class Node{
    constructor(data){
        this.data = data;
        this.next= null;
    }
}

function main(){
    let head = new Node(10);
    let a = new Node(20);
    let b = new Node(30);

    head.next = a;
    a.next = b
    // console.log(head.data);
    // console.log(head.next.data);
    // console.log(head.next.next.data);
    let temp = head;
    while(temp !== null){
        console.log(temp.data);
        temp = temp.next;
    }
}
main()
  