function subStringFinder(str, subStr){
  var getStr = '', index = null, substrlength = subStr.length;
  var count = 0
  for(var i = 0; i < str.length; i++){

    if(str[i] == subStr[count]){
      getStr += str[i]
      if(index == null){
        index = i
      }
      //console.log(getStr)
      if(getStr == subStr){
        return index
      }
      count = count+1

    }else if(count == (substrlength-1)){
      console.log("dsdsd whyyy")
      return -1
    }
    else{
      //console.log("noy 1 "+str[i])
      //console.log("noy 2 "+subStr[count])
      index = null
      getStr = ''
      count = 0
    }
  }
  //console.log("dsd "+getStr)
  return -1
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'))
console.log(subStringFinder('abbcdabbbbbck', 'bck'))
console.log(subStringFinder('abbcdabbbbbck', 'bbbck'))
