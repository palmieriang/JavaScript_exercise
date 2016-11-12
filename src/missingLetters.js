//Missing Letters

function fearNotLetter(str) {
  
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  alphabet = alphabet.split("");
  str = str.split("");
  
  if(str[0]!="a") {
    return undefined;
  }
  
  for (var i=0;i<str.length; i++) {
     if(str[i]!=alphabet[i]) {
        return alphabet[i];
     }
  }
  return str;
}

fearNotLetter("abce");


