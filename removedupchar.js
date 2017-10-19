function removeDuplicateChar(str){
  var dict = {}
  var remove = []
  for(var i = 0; i < str.length; i++){
    elem = str[i]
    if(dict[elem]){
      dict[elem]++
    }else{
      dict[elem] = 1
    }
  }

  for(key in dict){
    if(dict[key] == 1){
      remove.push(key)
    }
  }
  var word = remove.join('')
  return word
}

//removeDuplicateChar('Learn more javascript dude'); -> "Lnmojvsciptu"

console.log(removeDuplicateChar('Learn more javascript dude'))
