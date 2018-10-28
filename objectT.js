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

var Coin = enumeration({Penny: 1, Nicke: 5, Dime: 10, Quarter: 25});
var c = Coin.Dime;

function enumeration(namesToValues) {
    console.log(namesToValues);
    var enumeration = function () {
        throw "Can't Instantiate Enumerations";
    };

    var proto = enumeration.prototype = {
        constructor: enumeration,
        toString: function () {
            return this.name;
        },
        valueOf: function () {
            return this.value;
        },
        toJSON: function () {
            return this.name;
        }
    };

    enumeration.values = [];

    for (name in namesToValues) {
        var e = inherit(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }

    enumeration.foreach = function (f, c) {
        for (var i = 0; i < this.values.length; i++) f.call(c, this.values[i]);
    };

    return enumeration;
}
function Base() {
    this.c = 100;
}
var f = function () {
    this.a = 1;
    this.add = function (num) {
        this.a+=num;
    }
};
f.prototype.base = new Base();
function N() {
    this.b = 1;
}
N.prototype.add = function (num) {
    this.b+=num;
};
N.prototype.edit = function (num) {
    this.c=num;
};
N.prototype.base = new Base();
var a1 = new f();
var b2 = new N();
b2.edit(888);
console.log(a1);
console.log(b2);

