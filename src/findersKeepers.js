//Finders Keepers. 1st way
function findElement(arr, func) {
  var num = arr.filter(func);
  if(arr.length > 1) {
    return num[0];
  }
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

//Finders keepers. 2nd way
function findElement(arr, func) {
  var num = arr.filter(func);
  return num[0];
}

findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });
