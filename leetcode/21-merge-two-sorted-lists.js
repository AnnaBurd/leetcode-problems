/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (list1, list2) => {
	const merged = (runner = new ListNode(0, list1));

	while (list1 || list2) {
		console.log(
			merged,
			`runner at = ${runner?.val}, list1 at = ${list1?.val}, list2 at = ${list2?.val}`,
		);
		if (list2 && (!list1 || list1.val > list2.val)) {
			// Insert node from second list
			runner.next = list2;
			list2 = list2.next;
			runner = runner.next;

			// Point back at first list
			runner.next = list1;
		} else {
			// Move through first list
			runner = runner.next;
			list1 = list1.next;
		}
	}

	return merged.next;
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

a = new ListNode(10, new ListNode(19, new ListNode(25)));
b = new ListNode(1, new ListNode(19));

console.log(mergeTwoLists(a, b));
