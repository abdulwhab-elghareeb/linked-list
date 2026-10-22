import { Node } from "./Node.js";

export class LinkedList {
  head = null;

  append(value) {
    const node = new Node(value, null);
    this.head ? (this.head.nextNode = node) : (this.head = node);
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head ? (this.head = node) : this.append(value);
  }

  size() {
    let curr = this.head;
    let count = 0;

    while (curr != null) {
      curr = curr.nextNode;
      count++;
    }

    return count;
  }

  getHead() { // will be renamed later to head()
    return this.head || undefined
  }

  tail(){
    if(this.size() === 0) return undefined
    let curr = this.head

    while(true){
      if(curr.nextNode === null) return curr
      curr = curr.nextNode
    }
  }
}
