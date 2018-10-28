var funds = {
    type: 'CNY'
};
var x = funds;
var y = funds;

y.num = 100;

var o = {x:1}, p = {x:1};
var tt = o.prototype;
Array.prototype.test = function () {
    console.log("I'm test method");
}
var f = new Array();
var obj = new Object();

var fun = function () {};
var p = fun.prototype;
var c = p.constructor;

/*console.log(obj);
for (var key in obj){
    console.log('key:',key);
}*/
/*
console.log(p);
console.log(c);*/


