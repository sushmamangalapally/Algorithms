function removeDuplicate(arr){
  var noDup = []
  for(var i = 0; i < arr.length; i++){
    if(someinclude(noDup, arr[i]) == false){
      console.log(arr[i])
      noDup.push(arr[i])
    }
  }
  return noDup
}

function someinclude(arr, elem){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == elem){
      return true
    }
  }
  return false
}

function rDup(arr){
  var exists = {},
      noDup = [],
      elem;
  for(var i = 0; i < arr.length; i++){
    elem = arr[i]
    if(!exists[elem]){
      noDup.push(arr[i])
      exists[elem] = true
    }
    console.log(exists)
  }
  return noDup;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))
console.log(rDup([1,3,3,3,1,5,6,7,8,1]))
