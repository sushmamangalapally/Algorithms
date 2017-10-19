function largestSum(arr){
  var biggest = arr[0]
  var second = arr[1]
  var sum;
  if(biggest < second){
    biggest = arr[1]
    second = arr[0]
  }
  for(var i = 0; i < arr.length; i++){
    if(biggest < arr[i]){
      var temp = biggest
      biggest = arr[i]
      second = temp
    }
    else if(second < arr[i]){
      second = arr[i]
    }
  }
  sum = biggest+second
  return sum
}
