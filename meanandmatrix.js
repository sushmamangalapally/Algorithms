/*

Mean and Median of a matrix
2
Given a sorted matrix of size n*n. Calculate the mean and median of the matrix .
*/
function meanandmatrix(arr){
  var check = [], sum = 0
  var arrlen = arr.length
  for(var i =0; i < arrlen;i++){
    for(var j = 0; j < arrlen; j++){
      sum+=arr[i][j]
    }
  }
  var mean = sum/(arrlen*arrlen)
  var median
  if((arrlen*arrlen)%2 == 0){
    median = (arr[(arrlen-2)/2][arrlen-1]+arr[arrlen/2][0])/2
  }else{
    console.log(Math.floor(arrlen/2))
    median = arr[Math.floor(arrlen/2)][Math.floor(arrlen/2)]
  }

  console.log("mean: "+mean)
  console.log("median: "+median)
}

var a= [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]];
meanandmatrix(a)
