//Convert HTML Entities

function convertHTML(str) {
  var replaced = str.split('');
  // &colon;&rpar;
  for(var i=0; i<str.length; i++) {
    switch(str[i]) {
      case '&':
        replaced[i] = '&amp;';
        break;
      case '<':
        replaced[i] = '&lt;';
        break;
      case '>':
        replaced[i] = '&gt;';
        break;
      case '"':
        replaced[i] = '&quot;';
        break;
      case "'":
        replaced[i] = '&apos;';
        break;
    }
    
  }
  return replaced.join('');
}

convertHTML("Dolce & Gabbana");


//Second way

/*function convertHTML(str) {
  var replaced = "";
  // &colon;&rpar;
  for(var i=0; i<str.length; i++) {
    if(str[i]==='&') {
      replaced = str.replace("&", "&amp;");
    } else if (str[i]==='<') {
      replaced = str.replace('<', '&lt;');
    }
  }
  return replaced;
}

convertHTML("Dolce & Gabbana");*/


//Third way

/*function convertHTML(str) {
  str=str.split('');
  
   
  str=str.map(function(elem){
  
    if(elem==='&'){
       elem="&amp;";
    }else if(elem==='<'){
      elem="&lt;";
    }else if(elem==='>'){
      elem="&gt;";
    }else if(elem==='"'){
       elem="&quot;";
    }else if(elem==="'"){
       elem="&apos;";
    }
    
    return elem;
    
  });
  
  
  return str.join("");
}

convertHTML("Dolce & Gabbana");*/
