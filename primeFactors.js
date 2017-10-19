function primeFactors(num){
  var factor = []
  for(var i = 1; i <= num; i++){
    if(num%i == 0){
      factor.push(i)
    }
  }
  return factor
}

console.log(primeFactors(69))
