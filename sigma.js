function threesFives(){
  var sum =0
  for(var i = 100; i <= 4000000; i++){
    if(i%3 == 0 && i%5 == 0){
      continue
    }
    else if(i%3 == 0){
      sum+=i
    }
    else if(i%5 == 0){
      sum+=i
    }
    //console.log(sum)
  }
  return sum
}

console.log(threesFives())

function generateCoinChange(cents){
  if(cents  > 0){
    num = Math.floor(cents/25)
    console.log("quarters: ", num)
    cents = cents%25
    //console.log(cents)
  }
  if(cents  > 0){
    //console.log(cents)
    num = Math.floor(cents/10)
    console.log("dimes: ", num)
    cents = cents%10
  }
  if(cents  > 0){
    //console.log(cents)
    num = Math.floor(cents/5)
    console.log("nickels: ", num)
    cents = cents%5
  }
  if(cents  > 0){
    console.log("pennies: ", cents)
  }

}
function generateCoinChangerecursion(cents){
  if(cents  > 0){
    num = Math.floor(cents/25)
    console.log("quarters: ", num)
    cents = cents%25
    //console.log(cents)
  }
  if(cents  > 0){
    //console.log(cents)
    num = Math.floor(cents/10)
    console.log("dimes: ", num)
    cents = cents%10
  }
  if(cents  > 0){
    //console.log(cents)
    num = Math.floor(cents/5)
    console.log("nickels: ", num)
    cents = cents%5
  }
  if(cents  > 0){
    console.log("pennies: ", cents)
  }

}

generateCoinChange(94)

function anotherwaygenerateCoinChange(cents){
  var quarter=0, dime=0, nickel=0, penny=0;
  while(cents > 0){
    if((cents/25)>=1){
      cents -= 25
      quarter++
    }
    else if((cents/10)>=1){
      cents -= 10
      dime++
    }
    else if((cents/5)>=1){
      cents -= 5
      nickel++
    }
    else if(cents>0){
      cents -=1
      penny++
    }

  }
  console.log(" Quarter: "+quarter + "\n Dime: "+dime + "\n Nickel: "+nickel + "\n Penny: "+penny);

}

anotherwaygenerateCoinChange(94)
