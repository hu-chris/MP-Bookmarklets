var premList = [];
var a = document.getElementsByClassName('monthlyPremium');
for (i=0; i<a.length; i++) {
  var b = a[i].value;
  premList.push(b);
}

console.log(premList);

