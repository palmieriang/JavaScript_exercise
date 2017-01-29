// Map the Debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var arrayResult = [];
  
  for(var i in arr) {
    var result = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt, 3)/GM));
    arrayResult.push({name:arr[i].name, orbitalPeriod:result});
  }
  return arrayResult;

  // 2nd way:

  // for(var i = 0; i < arr.length; i++) {
  //   var result = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt, 3)/GM));
  //   arrayResult.push({name:arr[i].name, orbitalPeriod:result});
  // }
  // return arrayResult;

  // 3rd way:

  // arr.forEach(function(obj) {
  // 	var orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+obj.avgAlt, 3)/GM));
  // 	obj.orbitalPeriod = orbitalPeriod;
  //   delete obj.avgAlt;
  // });
  // return arr;

}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);