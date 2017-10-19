
var firstMissingPositive = function(nums) {
    arrayNum = []
    if(nums.length <= 1){
        return 1
    }
    for(var i = 0; i <nums.length; i++){
        min = findingMin(nums)
        arrayNum.push(min)
        nums.splice(nums.indexOf(min), 1)
        console.log(nums)
    }
    arrayNum.push(nums[0])
    console.log(arrayNum)
    get = false
    for(var p = 1; p <= arrayNum.length-1; p++){
        if(arrayNum[p-1] == (arrayNum[p]-1)){
            get = true
        }
        else{
            get = false
            index = p-1
            indextwo = p
        }
    }
    if(get == true){
        arrayNum.push(arrayNum[arrayNum.length-1]+1)
    }else{
        console.log(index)
        console.log(indextwo)
        arrayNum.splice(indextwo, 0, arrayNum[index]+1)
    }
    console.log("yyyy")
    console.log(arrayNum)
    return arrayNum
};

var findingMin = function(nums){
    min = nums[0]
    for(var j = 0; j < nums.length; j++){
        if(min > nums[j]){
            min = nums[j]
            index = j
        }

    }
    console.log("min "+min)
    return min
}

firstMissingPositive([])