function firstNonRepeatChar(str){
  var split_str = str.split('')
  var dict = {}
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
      return key
    }
  }
}

//want firstNonRepeatChar('the quick brown fox jumps then quickly blow air') -> f
console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))
