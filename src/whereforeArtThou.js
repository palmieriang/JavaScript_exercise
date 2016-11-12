//Wherefore art thou

function whatIsInAName(collection, source) {
  // What's in a name?

  // Only change code below this line
  var arr = collection.filter(function(item){	//use filter and return true values
    for (var i in source) {						//check values in source
     if(source[i]!=item[i]) {					//compare with item
       return false;
     }
    }
    return true;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
