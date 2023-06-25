class Stack {
  constructor() {
    this.items = [];
  }

  // Method to push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the topmost element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the topmost element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Method to get the size of the stack
  size() {
    return this.items.length;
  }

  // Method to clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30

console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true