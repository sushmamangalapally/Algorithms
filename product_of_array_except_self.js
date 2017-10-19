/*
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].


*/

var productExceptSelf = function(nums) {
    p=1
    output = []
    for(var i = 0; i < nums.length; i++){
        output.push(p) //push 1 first
        p = p*nums[i] //we will multiply one by one
    }
    console.log(output) //we get [1, 1, 2, 6]
    p=1
    for(var j = (nums.length-1); j >= 0; j--){
        output[j] = p*output[j] //1*6 = 6; 4*2=8; 12*1 = 12; 24*1 = 24
        p = p*nums[j] // 1*4 = 4; 4*3=12; 12*2 = 24; 24*1 = 24
    }
    return output
    /*
        Use LCD concepts:
            2: 2, 4, 6, 8, 10, 12, 14, ... 24
            3: 3, 6, 9, 12, 15, 18, 21, 24
            4: 4, 8, 12, 16, 20, 24
            so LCD: 6, 8, 12, 24
    */
    // console.log(nums)
    // ans = []
    // get = 1
    // for(var i = 0; i < nums.length; i++){
    //     for(var j = 0; j < nums.length; j++){
    //         get = nums[i]*nums[j] 
    //         ans.push(get)
    //     }
        
    // }
    // console.log(ans)
    // return ans
    // ans = []
    // get = 1
    // for(var i = 0; i < nums.length; i++){
    //     for(var j = i+1; j < nums.length; j++){
    //         get = get*nums[i]*nums[j]
    //         if(!nums.includes(get) && !ans.includes(get)){
    //             ans.push(get)
    //             get = 1
    //         }
            
    //     }
        
    // }
    // console.log(ans)
    // return ans
};

console.log(productExceptSelf([1,2,3,4]))