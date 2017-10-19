
  // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    // console.log(l1.val)
    // console.log(l2.val)
    carry = 0
    getarray = []
    // ListNode dumm = new ListNode(0)
    // curr = dumm
    while(l1 != null || l2 != null){
        if(l1 != null){
            x = l1.val
        }
        else{
            x = 0
        }
        
        if(l2 != null){
            y = l2.val
        }else{
            y = 0
        }
        // console.log(x)
        // console.log(y)
        sum = carry+x+y
        carry = Math.trunc(sum/10)
        getarray.push(Math.trunc(sum%10))
        // curr.next = new ListNode(Math.trunc(sum%10))
        // curr = curr.next
        if(l1.next !=null){
            l1 = l1.next
        }
        if(l2.next != null){
            l2 = l2.next
        }
        
    }
    if(carry > 0){
        getarray.push(carry)
        // curr.next = new ListNode(carry)
    }
    return getarray
    //so we have a carry
//     if(carry){
//         getsum = carry+l1.val+l2.val
//     }
//     else{
//         getsum = l1.val+l2.val
//     }
    
//     if(getsum >= 10){
//         sum = getsum-10
//         carry = 1
//     }
//     else{
//         sum = getsum
//         carry = 0
//     }
//     if(!getarray){
//         getarray = []
//         getarray.push(sum)
//     }
//     else{
//         getarray.push(sum)
//     }
//     if(l1.next != null && l2.next != null){
//         addTwoNumbers(l1.next, l2.next, carry, getarray)
//     }
//     else if((l2.val == 0 && l2.next != null) || (l1.val == 0 && l1.next != null)){
//         console.log("Dsds "+carry)
//         getarray.push(carry)
//     }
//     else if(l2.next == null && l1.next !=null && l2.data == 0){
//         console.log("asdadads")
//         getarray.push(l1.next.val)
//     }
//     else if(l1.next == null && l2.next == null && carry==1){
//         console.log("dsds")
//          getarray.push(carry)
//     }
   
    
//     return getarray
    
    
    
};