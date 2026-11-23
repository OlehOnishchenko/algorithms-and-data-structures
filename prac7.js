class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(item) {
    let newNode = new Node(item);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }

    let removedValue = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return removedValue;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  count() {
    return this.length;
  }

  toString() {
    if (this.head === null) {
      return "Черга порожня";
    }

    let result = "Head -> ";
    let current = this.head;

    while (current !== null) {
      result += current.data;
      if (current.next !== null) {
        result += " -> ";
      }
      current = current.next;
    }

    result += " <- Tail";
    return result;
  }
}

let myQueue = new Queue();

myQueue.enqueue(12);
myQueue.enqueue(25);
myQueue.enqueue(8);

console.log(myQueue.toString());
console.log(myQueue.count());
console.log(myQueue.peek());

console.log(myQueue.dequeue());
console.log(myQueue.toString());
console.log(myQueue.count());

console.log(myQueue.dequeue());
console.log(myQueue.toString());
