function inherit(p) {
    if(p == null) throw TypeError();
    if(Object.create)
        return Object.create(p);
    var t = typeof p;
    if(t != 'Object' && t !== 'function') throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}

function range(from, to) {
    var r = inherit(range.methods);

    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function () {
        return "("+ this.from + "..." + this.to +")";
    }
};

function Range(from, to){
    this.from = from;
    this.to = to;
}

function Test(from, to){
    this.from = from;
    this.to = to;
}
Range.prototype = {
    constructor: Range,
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f){
        for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};

var r = new Range(1, 3);
r.includes(2);
// r.foreach(console.log);
// console.log(r.constructor);
// var tof = r instanceof Range;

Test.prototype.includes = function (x) {
    return this.from <= x && x <= this.to;
};

var tt = new Test(1, 4);
// console.log(tt.constructor);

function classof(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}


var obj = {};
obj.na = function () {
    return arguments;
};

function trace(o, m) {
    var original = o[m];
    o[m] = function() {
        console.log(new Date(), "Entering:", m);
        var result = original.apply(this, arguments);
        console.log(new Date(), "Entering:", m);
        return result;
    }
}

trace(obj, 'na');
obj.na();