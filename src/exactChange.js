//Exact Change
  
  var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY',  val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];


function checkCashRegister(price, cash, cid) {
  
  var change = cash - price;
  var sum = cid.reduce(function(acc, next) {
    return acc + next[1];
  }, 0.0);

//Another way to calculate sum (total CID)
//  var sum = 0;
//  for(var i=0; i<cid.length; i++) {
//    sum += cid[i][1]; 
//  }
  
  if(change > sum) {
    return "Insufficient Funds";
  } else if(sum === change) {
    return "Closed";
  }
  
  cid = cid. reverse();
  
  var result = denom.reduce(function(acc, next, index) {
    if(change >= next.val) {
      var currentValue = 0.0;
      while(change >= next.val && cid[index][1] >= next.val) {
        currentValue += next.val;
        change -= next.val;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.val;
      }
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);
  
  return result.length > 0 && change === 0 ? result : "Insufficient Funds";
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
