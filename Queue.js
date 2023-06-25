class Queue {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Method to get the size of the queue
  size() {
    return this.items.length;
  }

  // Method to clear the queue
  clear() {
    this.items = [];
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10

console.log(queue.size()); // Output: 2

console.log(queue.isEmpty()); // Output: false

queue.clear();
console.log(queue.isEmpty()); // Output: true