function reverseWords(str){
  var word = str.split(' ')
  var revSent = ''
  for(var i = word.length-1; i >=0; i--){
    revSent = revSent + word[i]+" "
  }
  return revSent
}

console.log(reverseWords("i am sushma"))

function reverseWords1(str){
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords1("i am sushma"))
