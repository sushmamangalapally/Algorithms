//3. Write a function that determines which function is a mirror number. i.e. 12321 would return YES
function mirrorNumber(num){
    var count = 0
    var something = []
    while(num > count){
      var some = num%10
      something.push(some)
      num = Math.floor(num/10)
    }
    console.log(something)
    var end = something.length-1
    for(var i = 0; i < ((something.length-1)/2); i++){
      if(something[i] != something[end]){
        console.log("NO")
        return false
      }
      end--
    }
    console.log("YES")
    return true

}
console.log(mirrorNumber(123521))
