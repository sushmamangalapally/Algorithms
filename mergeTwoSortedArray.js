function mergeSortedArray(arr1, arr2){
  var merge = []
  var counter1 = 0, counter2 = 0;
  while(counter1 < arr1.length || counter2 < arr2.length){
    if(arr1[counter1] < arr2[counter2]){
      merge.push(arr1[counter1])
      counter1++
    }
    else if(arr1[counter1] > arr2[counter2]){
      merge.push(arr2[counter2])
      counter2++
    }
    else{ //if arr1[counter1] == arr2[counter2]
      merge.push(arr1[counter1])
      merge.push(arr2[counter2])
      counter1++
      counter2++
    }
  }
  return merge
}
console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]))

function mergeSortArrayTwo(a, b){
  var merged = [],
      aElem = a[0],
      bElem = b[0],
      i = 0,
      j = 0;

  if(a.length == 0){
    return b
  }
  if(b.length == 0){
    return a
  }

  while(aElem || bElem){
    if((aElem && !bElem) || (aElem < bElem)){
      merged.push(aElem)
      i= i+1
      aElem = a[i]
    }else{
      merged.push(bElem)
      j = j+1
      bElem = b[j]
    }
  }
  return merged
}
console.log(mergeSortArrayTwo([2,5,6,9], [1,2,3,29]))
