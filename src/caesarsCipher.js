function rot13(str) { 
  
//I split the input in character, this way I can use the map function on each of this
  var letters = str.split('');
//new variable, I will store the final word encoded/decoded
  var word = '';
  
  return letters.map(function(code) {

//charCodeAt() returns the UTF-16 code of each letter
    code = code.charCodeAt();

//for letter from A to M, add 13
    if(code>=65 && code<= 77) {
      code += 13;

//for letter from N to Z, subtract 13
    } else if(code>=78 && code<= 90) {
      code -= 13;
    }

//fromCharCode returns the character from the UTF-16 code
    word = String.fromCharCode(code);
    return word;

//join() returns a string from an array
  }).join('');
}
// test the function
rot13("NATRYB CNYZVREV");


//Another way
function rot13(str) {

  var word = [];

  for(var i=0; i<str.length; i++) {
    
    var code = str.charCodeAt(i);

    if(code>=65 && code<= 77) {
      code += 13;

    } else if(code>=78 && code<= 90) {
      code -= 13;
    }

    word.push(String.fromCharCode(code));

  }
  return word.join('');
}

rot13("NATRYB CNYZVREV");