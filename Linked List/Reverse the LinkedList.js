// Reverse the Linked List

// Description
// Given the pointer to the head node of a linked list, change thepointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.
// Complete thereversefunction in the editor below.
// reversehas the following parameter:
// LinkedListNode pointer head:a reference to the head of a list

// Input
// The first line contains an integer t, the number of test cases.
// Each test case has the following format:
// The first line contains an integer n, the number of elements in the linked list.
// Each of the next n linescontains an integer, the data valuesof the elements in the linked list.

// t <= 50
// n <= 1000
// list[i] <=1000

// Output
// For each test case print the updated Linked List
// Sample Input 1 
// 1
// 5
// 1
// 2
// 3
// 4
// 5
// Sample Output 1
// 5 4 3 2 1 




const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


// Complete the function below

function reverse(head, printList) {
  var current = head;
  var prev = null;
  var node = null;
  while (current !== null) {
    node = current.next;
    current.next = prev;
    prev = current;
    current = node;
  }
 
  return prev;
}

var head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5);

reverse(head, printList);

function printList(head) {
  var res = "";
  var current = head;
  while (current !== null) {
    res += current.data + " ";
    current = current.next;
  }
  console.log(res);
}


