/*

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.


*/
function coinChange(coins, amount, arr=[]){
  if(coins.length == 0){
    return arr
  }
  function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
  }

  var maxn = getMaxOfArray(coins)
  if(amount >= maxn){
    amount = amount-maxn
    //amount = 11-5
    //amount = 6
    console.log(maxn)
    console.log(arr)
    console.log(amount)
    arr.push(maxn)
    coinChange(coins, amount, arr)
  }else{
    var indexofmaxn = coins.indexOf(maxn)
    if(indexofmaxn != -1){
      console.log("else "+maxn)
      console.log("indexofmaxn "+indexofmaxn)
      //coins.splice(indexofmaxn, 1)
      console.log(coins)
      coins[indexofmaxn] = -1
      coinChange(coins, amount, arr)
    }else{
      return arr
    }
  }

  return arr
}

console.log(coinChange([1, 2, 5], 11))
