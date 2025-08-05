// ✅ Definition for singly-linked list 
// Remove Nth Node From End of Singly Linked List (Two Pass Approach)


// Output: [1, 2, 3, 5]
// Time complexity= 0(n)
// space complexity=0(1)


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// ✅ Main function to remove Nth node from end
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    let prevPos = length - n;
    let prev = sentinel;

    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }

    prev.next = prev.next.next;

    return sentinel.next;
}

// ✅ Helper: Convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// ✅ Helper: Convert linked list to array
function listToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// ✅ Test the function
let headArray = [1, 2, 3, 4, 5], n = 2;
let head = arrayToList(headArray);

let removeFromEnd = removeNthFromEnd(head, n);
console.log(listToArray(removeFromEnd)); 


