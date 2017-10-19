//recursive way but doesn't work
function isPrime(num, get){
  var i = Math.floor(get/2)
  if(i == 1){
    return 1
  }
  else{
    if(num%i == 0)
    {
      console.log("Dsds")
      return false
    }else{
      isPrime(num, i-1)
    }
  }
  return true
}

console.log(isPrime(237, (237/2)))

function checkPrime(num){
  var count = 0
  for(var i = 1; i <= num; i++){
    if(num%i == 0){
      count++
    }
  }
  if(count == 2){
    return true
  }
  else{
    return false
  }
}

console.log(checkPrime(237))
