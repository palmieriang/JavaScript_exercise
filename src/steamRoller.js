//Flatten a nested array

function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  for (var i=0; i<arr.length; i++) {
  
    arr = [].concat.apply([], arr);
    
  }
  
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
