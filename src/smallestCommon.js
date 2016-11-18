
function smallestCommons(arr) {

  var list = [];
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  for (var i = min; i <= max; i++) {
    list.push(i);
  }

  var x = true;
  var CM = 0;

  while(x) {
    CM++;
    for(var j=list[0]; j<=list[list.length-1]; j++) {
      if(CM % j !== 0) {
        break;
      } else if(j==list[list.length-1]) {
        x = false;
      }
    }
  }
    
  return CM;

}

smallestCommons([1,5]);



function smallestCommons(arr) {
  var range = arr.sort();
  var array = [];
  for(var i=arr[0]; i<=arr[arr.length-1]; i++) {
    array.push(i);
  }
  var x = true;
  var LCM = 0;
  while(x) {
    LCM++;
    for(var j=array[0]; j<=array[array.length-1]; j++) {
      if(LCM % j !== 0) {
        break;
      } else if(j == array[array.length-1]) {
        x = false;
      }
    }
  }
  return LCM;
}


smallestCommons([1,5]);