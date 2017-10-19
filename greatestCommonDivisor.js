//iterative approach
function gcd(a, b){
  var div = 2
  var gDiv = 1;

  if(a < 2 || b < 2){
    return 1
  }

  while(a >= div && b >= div){
    if(a%div == 0 && b%div == 0){
      gDiv = div
    }
    div++
  }
  return gDiv
}

//recursive approach
function greatestCD(a, b){
  if(b == 0){
    return a
  }else{
    return greatestCD(b, a%b)
  }
}

console.log(gcd(14, 21))
console.log(gcd(69, 169))
console.log(greatestCD(14, 21))
console.log(greatestCD(69, 169))
