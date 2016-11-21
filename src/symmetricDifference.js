//Symmetric Difference.

function sym(args) {
  
    args = Array.prototype.slice.call(arguments);

    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}
sym([1, 2, 3], [5, 2, 1, 4]);
//The symDiff function finds the symmetric difference between two sets. 
//It is used as a callback function for the reduce() method called on args.




//Symmetric Difference. Different attempt

function sym(args) {
  
  var diff = [];
  
  for(var i=0; i<arguments.length; i++) {
    for(var j=0; j<arguments[i].length; j++) {
      if(diff.indexOf(arguments[i][j])===-1) {
        diff.push(arguments[i][j]);
      }
    }
  }
  
  return diff;
}

sym([1, 2, 3], [5, 2, 1, 4]);



//Different attempt

function sym(args) {
  
  args = Array.prototype.slice.call(arguments);
  var diff = [];
  var result = [];
  
  for(var i=0; i<args.length; i++) {
    diff = args.reduce(function(a, b) { 
      return a.concat(b);
    }, []);
  }
  var sorted = diff.slice().sort();
  //return sorted;
  var k = sorted.length-1;
  for (var j = 0; j < k; j++) {
    if (sorted[j + 1] !== sorted[j] || sorted[j]===sorted[k]) {
      result.push(sorted[j] + ',' + sorted[k]);
      return result.join();
    }
  }

}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);

Ritorna: 		1,5