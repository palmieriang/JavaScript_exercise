//Inventory Update

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var inventory = arr1.concat(arr2).reduce(function(acc, next) {
    if(acc[next[1]]) {
      acc[next[1]] += next[0];
    } else {
      acc[next[1]] = next[0];
    }
    return acc;
  }, {});

  
  return Object.keys(inventory).sort().map(function(value) {
    return [inventory[value], value];
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


//Anothre way to sum elements

  var sum = 0;
  for(var i=0; i<arr1.length; i++) {
    for(var j=0; j<arr2.length; j++) {
      if(arr1[i][1]===arr2[j][1]) {
        return arr1[i][0] + arr2[j][0];
      }
      
    }
  }
  return sum;
