var lengthOfLongestSubstring = function(s) {
    getArray = s.split("");
    // pushArray = []
    // for(var i = 0; i < getArray.length; i++){
    //     if(!pushArray.includes(getArray[i])){
    //         pushArray.push(getArray[i])
    //     }
    // }
    // pushArray1 = []
    // for(var i = 0; i < getArray.length-1; i++){
    //     console.log(getArray[i])
    //     console.log(getArray[i+1])
    //     if(getArray[i] != getArray[i+1]){
    //         pushArray1.push(getArray[i])
    //     }
    //     else{
    //         pushArray1 = []
    //     }
    //     console.log("\n")
    // }
    // getstr1 = pushArray1.join("")
    // console.log(getstr1)
    // getstr = pushArray.join("")
    // console.log(getstr)

    // newarr = []
    // word = []
    // for(var i = 0; i < getArray.length; i++){
    //     console.log(getArray[i])
    //     console.log(word)
    //     if(!word.includes(getArray[i])){
    //         word.push(getArray[i])
    //     }else{
    //         newarr.push(word.join(""))
    //         word = []
    //         word.push(getArray[i])
    //     }
    // }
    // newarr.push(word.join(""))
    // console.log(newarr)
    // longestlength = 0
    // for(var j = 0; j < newarr.length; j++){
    //     // console.log(newarr[j])
    //     if(longestlength < newarr[j].length){
    //         longestlength = newarr[j].length
    //     }
    // }

    newarr = []
    word = []
    if(getArray.length <= 1){
        return getArray.length
    }
    if(getArray.length == 2){
        if(getArray[0] != getArray[1]){
            return getArray.length
        }
    }
    for(var i = 0; i < getArray.length; i++){
        if(i == 0){
            word.push(getArray[i])
        }        
        for(var j = i+1; j <= getArray.length; j++){
            // for(var m = i; m < j; m++){
                if(!word.includes(getArray[j])){
                    word.push(getArray[j])
                }else{
                    newarr.push(word.join(""))
                    word.push(getArray[j])
                    word = []
                    
                }
                console.log(getArray[j])
                console.log(word)
    
            // }
            
        }
    }
    newarr.push(word.join(""))
    console.log(newarr)
    longestlength = 0
    for(var j = 0; j < newarr.length; j++){
        // console.log(newarr[j])
        if(longestlength < newarr[j].length){
            longestlength = newarr[j].length
        }
    }
    return longestlength
    
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))
// console.log(lengthOfLongestSubstring("cdd"))