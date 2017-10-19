var delete_duplicates = function(somearray){
  var same = []
  for(var i =0; i < somearray.length; i++){
    //console.log(somearray[i])
    if(!same.includes(somearray[i])){
      same.push(somearray[i])
    }
  }
  return same
}

console.log(delete_duplicates([1,2,2,3,3,3,4,4,5,5]))
