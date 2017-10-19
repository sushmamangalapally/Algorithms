function reverseinPlace(str){
  var split_str = str.split(' ')
  var back = []
  console.log(split_str)
  for(var i = 0; i < split_str.length; i++){
    var revWord = ""
    for(var j = split_str[i].length-1; j >= 0; j--){
      revWord = revWord+split_str[i][j]
    }
    back.push(revWord)
  }
  return back.join(" ")
}

console.log(reverseinPlace('I am the good boy'))
