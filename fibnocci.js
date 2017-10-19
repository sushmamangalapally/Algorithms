var fib = function(n){
    if(n==0){
        return 0
    }
    else if(n==1){
        return 1
    }else{
        return fib(n-1)+fib(n-2)
    }
}

console.log(fib(8))

var fibnorecursion = function(n){
    if(n == 0){
        return 0
    }else if(n==1){
        return 1
    }else{
        var count = 1
        var countprev = 0
        for(var i = 0; i < (n-1); i++){
            var temp = count
            count = count+countprev
            countprev = temp
        }
        console.log(count)
        return count
    }
}

console.log(fibnorecursion(6))
