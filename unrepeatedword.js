//How to found first unrepeated character in the string. “abca” return “b”

var unrepeated = function(word){
    splitword = word.split("")
    var dictionary = {};
    for(var j = 0; j < word.length; j++){
        if(dictionary[splitword[j]]){
            dictionary[splitword[j]] += 1
            console.log(splitword[j])
        }else{
            dictionary[splitword[j]] = 1
        }
    }
    console.log(dictionary)
    for(var k=0; k < word.length; k++){
        if(dictionary[splitword[k]] == 1){
           // console.log(splitword[k])
            return splitword[k]
        }
    }
    return null
    
    //for(var k = 0; k < word.length; k++)
    // var someletter = []
    // for(var i = 0; i < splitword.length; i++){
    //     if(!someletter.includes(splitword[i])){
    //         someletter.push(splitword[i])
    //     }else{
    //         var index = someletter.indexOf(splitword[i])
    //         someletter.splice(index,1)
    //     }
    // }
    // if(someletter.length == 0){
    //     return null
    // }else{
    //     return someletter[0]
    // }
}

console.log(unrepeated("abca"))