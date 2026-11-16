class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(item) {
    let newNode = new Node(item, this.top);
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    let removedValue = this.top.data;
    this.top = this.top.next;
    this.length--;
    return removedValue;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.data;
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  count() {
    return this.length;
  }

  size() {
    return this.length;
  }

  toString() {
    if (this.top === null) {
      return "Стек порожній";
    }
    let result = "";
    let current = this.top;

    while (current !== null) {
      result += current.data;
      if (current.next !== null) {
        result += " -> ";
      }
      current = current.next;
    }
    return result;
  }
}

// Задача знаходження найближчого меншого елемента зліва
function findNearestSmaller(arr) {
  let stack = new Stack();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.top !== null && stack.peek() >= arr[i]) {
      stack.pop();
    }

    if (stack.top === null) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }

    stack.push(arr[i]);
  }

  return result;
}

let myStack = new Stack();

myStack.push(11);
myStack.push(22);
myStack.push(33);

console.log(myStack.toString());
console.log(myStack.count());
console.log(myStack.size());
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.toString());
console.log(myStack.size());

myStack.clear();
console.log(myStack.toString());
console.log(myStack.count());

let numbers = [4, 5, 2, 10, 8];
console.log(numbers);
console.log(findNearestSmaller(numbers));
