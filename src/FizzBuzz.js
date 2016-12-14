// var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var list = [];

for (var i = 1; i <= 0; i++) {
	list.push(i);
}

for(var i=0; i<list.length; i++) {


    if(list[i]%3 === 0 && list[i]%5 !== 0) {
        console.log("Fizz");
    } else if(list[i]%5 === 0 && list[i]%3 !== 0) {
        console.log("Buzz");
    } else if(list[i]%3 === 0 && list[i]%5 === 0) {
        console.log("FizzBuzz");    
    } else {
        console.log(list[i]);    
    }

}
