//Diff Two Arrays

function diffArray(arr1, arr2) {
  var result = [];
  // Same, same; but different.
        arr1.forEach(function(item) {
            if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arr2.forEach(function(item) {
            if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//Second way

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i=0;i<arr1.length;i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for(var j=0;j<arr2.length;j++) {
    if(arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
