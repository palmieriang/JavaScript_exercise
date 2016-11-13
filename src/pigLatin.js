// Pig Latin

function translatePigLatin(str) {

  var letters = str.split('');
  var vowel = /[aeiou]/;
  
  if(vowel.test(letters[0])) {
    return str  + 'way';
  }
  while(true) {
    if(!vowel.test(letters[0])) {
      letters.push(letters.splice(0,1));
    } else {
      break;
    }
  }
  str = letters.join("") + 'ay';
  return str;
}

translatePigLatin("consonant");
