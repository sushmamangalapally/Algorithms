var palindrome = function(word){
    var word = word.toLowerCase();
   // var splitword = word.split("")
   // console.log(splitword)
    var endword = word.length-1
    for(var i = 0; i < Math.floor(word.length/2); i++){
        if(word[i] != word[endword]){
            console.log(word[i])
            console.log(word[endword])
            return false
        }
        console.log(word[i])
        console.log(word[endword])

        endword--
        
    }
    return true
}

console.log(palindrome('hannah'))