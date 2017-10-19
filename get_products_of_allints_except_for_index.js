function get_products_of_all_ints_except_at_index(arr){
  var prod = []
  for(var i = 0; i < arr.length; i++){
    var prodcount = 1
    for(var j = 0; j<arr.length; j++){
      if(i != j){
        prodcount = prodcount*arr[j]
      }
    }
    prod.push(prodcount)
  }
  return prod
}


get_products_of_all_ints_except_at_index([1, 0, 3, 4])
