
function addTogether() {
  
  var params = [].slice.call(arguments);

  //Check if every param part is a number
  if(!params.every(function(param) {
    return typeof param === 'number';
  })) {
    return undefined;
  }
  
  if(params.length===2) {
    return params[0] + params[1];
  } else {
    //store the first parameter
    var firstParam = params[0];
    //Store a function that will take in the second parameter and using recursion call itself to add the values
    var addOneMore = function(secondParam) {
      return addTogether(firstParam,secondParam);
    };
    return addOneMore;
  }  
}

addTogether(2,3);
