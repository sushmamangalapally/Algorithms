function commonsorted(arr1, arr2){
  var get = []
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] == arr2[j]){
        get.push(arr1[i])
      }
    }
  }
  return get
}
console.log(commonsorted([1,2,21, 30, 31, 32, 34,63,], [3, 6, 7, 31, 32]))
