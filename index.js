class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}

// Helper function to convert a linked list to an array
function convertToArray(head) {
  let arr = [];

  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  return arr;
}

// Test cases
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
const sum1 = addTwoNumbers(l1, l2);
console.log(convertToArray(sum1)); // Output: [7, 0, 8]

const l3 = createLinkedList([0]);
const l4 = createLinkedList([0]);
const sum2 = addTwoNumbers(l3, l4);
console.log(convertToArray(sum2)); // Output: [0]

const l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l6 = createLinkedList([9, 9, 9, 9]);
const sum3 = addTwoNumbers(l5, l6);
console.log(convertToArray(sum3)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]

