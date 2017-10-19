var reverse_word = function(sentence){
  /*
  Easy Way to Reverse Word in Sentence using Built-in Functions
  var splitword = sentence.split(" ")
  var reverse_word1 = splitword.reverse()
  var reverse_sentence = reverse_word1.join(" ")
  return reverse_sentence
  */
  var splitword = sentence.split(" ")
  var endcount = splitword.length-1
  for(var i =0; i < Math.floor(splitword.length/2); i++){
    var temp = splitword[endcount]
    splitword[endcount] = splitword[i]
    splitword[i] = temp
    endcount--

  }
  console.log(splitword)
  var reverse_sentence = splitword.join(" ")
  return reverse_sentence
}

console.log(reverse_word("geeks quiz practice code"))
