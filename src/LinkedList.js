import { Node } from "./Node.js";

export class LinkedList {
  #head = null;
  #size = 0;

  append(value) {
    const node = new Node(value, null);

    if (!this.#head) {
      this.#head = node;
    } else {
      let curr = this.#head;
      while (curr.nextNode != null) {
        curr = curr.nextNode;
      }
      curr.nextNode = node;
    }

    this.#size++;
  }

  prepend(value) {
    const node = new Node(value, this.#head);
    if (this.#head) {
      this.#head = node;
      this.#size++;
    } else {
      this.append(value);
    }
  }

  size() {
    return this.#size;
  }

  // will be renamed later to head()
  head() {
    return this.#head.value || undefined;
  }

  tail() {
    if (this.#size === 0) return undefined;
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
    this.#size--;
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

  insertAt(index, ...values) {
    if (index >= this.#size || index < 0)
      throw RangeError("Index out of range");

    if (index === 0) {
      values.forEach((value) => this.prepend(value));
      return;
    }

    if (index === this.#size - 1) {
      values.forEach((value) => this.append(value));
      return;
    }

    let beforePrev = null; // pointer `1
    let prev = null; // pointer 2
    let curr = this.#head; // pointer 3

    for (let i = 0; i < index; i++) {
      [beforePrev, prev, curr] = [prev, curr, curr.nextNode];
    }
    values.forEach((value) => {
      const node = new Node(value, curr);
      [beforePrev, prev] = [prev, node];
      beforePrev.nextNode = prev; // keep referencing at prev so it doesn't get garbage collected

      this.#size++;
    });
  }

  removeAt(index) {
    if (index >= this.#size || index < 0)
      throw RangeError("Index out of range");

    let prev = null;
    let curr = this.#head;
    for (let i = 0; i <= index - 1; i++) {
      [prev, curr] = [curr, curr.nextNode];
    }
    prev.nextNode = curr.nextNode; // cut the reference
    this.#size--;
  }
}
