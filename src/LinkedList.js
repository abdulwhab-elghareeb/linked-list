import { Node } from "./Node.js";

export class LinkedList {
  #head = null;

  append(value) {
    const node = new Node(value, null);

    if (!this.#head) {
      this.#head = node;
      return;
    }

    let curr = this.#head;
    while (curr.nextNode != null) {
      curr = curr.nextNode;
    }
    curr.nextNode = node;
  }

  prepend(value) {
    const node = new Node(value, this.#head);
    this.#head ? (this.#head = node) : this.append(value);
  }

  size() {
    let curr = this.#head;
    let count = 0;

    while (curr != null) {
      curr = curr.nextNode;
      count++;
    }

    return count;
  }

  // will be renamed later to head()
  head() {
    return this.#head.value || undefined;
  }

  tail() {
    if (this.size() === 0) return undefined;
    let curr = this.#head;

    while (curr.nextNode != null) {
      curr = curr.nextNode;
    }

    return curr;
  }

  at(index) {
    if (index < 0) return;
    let curr = this.#head;

    for (let i = 0; i < index; i++) {
      curr = curr.nextNode;
      if (curr === null) return;
    }

    return curr;
  }

  pop() {
    if (!this.#head) return;

    const tmpHead = this.#head;
    this.#head = this.#head.nextNode;
    return tmpHead;
  }

  contains(value) {
    let curr = this.#head;

    while (curr != null) {
      if (curr.value === value) return true;
      curr = curr.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let curr = this.#head;
    let currentIndex = 0;

    while (curr != null) {
      if (curr.value === value) return currentIndex;
      curr = curr.nextNode;
      currentIndex++;
    }

    return -1;
  }

  toString() {
    if (!this.#head) return "";
    let curr = this.#head;
    let resultString = "";

    while (curr != null) {
      resultString += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }
    resultString += "null";

    return resultString;
  }
}
