function missingNumber(arr){
  var length_arr = arr.length+1
  var total_sum = length_arr * ((length_arr+1)/2)
  var sum = 0
  for(var i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  var missing_num = total_sum-sum
  return missing_num
}

console.log(missingNumber([5, 2, 6, 1, 3]))
