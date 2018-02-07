// sabrati dva broja
var a = 2;
var b = 3;
//Deklaracija f-je
function addition(x, y) {
    return console.log(x + y);
}
addition(a, b);

// zadatak 1

var f = "vezbanje funkcije";
function check(s) {
    if (typeof (s) === "string") {
        return console.log("string je ");
    } else {
        return console.log("nije string");
    }
}

check(true);


// zadatak 2

var a = "dsada";

function prazanString(s) {
    if (s === " ") {
        return console.log(true);
    } else if (typeof (s) === "number") {
        return console.log(false);
    }
    else if (typeof (s) === "string") {
        return console.log(false);
    }
    return console.log("Nista nije");
}

prazanString(a);


//zadatak 3


var n = 4;
var ha = "Ha";
var sum = "";

function qq(ha, n) {
    if (n == undefined) {
        n = 1;
    }
    for (var i = 0; i < n; i++) {
        sum += ha;
    }
    return console.log(sum);
}
qq(ha, 3);

// zadatak 4

var g = "my random string";
var n = 16;
var s = 0;
function occurrence(broj, b) {
    for (var i = 0; i < broj; i++) {
        if (b[i] === "n") {
            s += 1;
        }
    }
    return console.log(s);
}
occurrence(n, g);

// zadatak 5

var g = "Hello hello";
var n = "l";

function first(string, letter) {
    var firstOccur = -1;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            firstOccur = i;
            break;
        }
    }

    return firstOccur;
}

console.log(first(g, n));

// zadatak 6

var g = "Hello hello";
var n = "o";


function first(string, letter) {
    var lastOccur = -1;
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            lastOccur = i;
            counter++;
        }
    }

    return lastOccur;
}

console.log(first(g, n));

//zadatak 7

var z = "My random string";
var a = [];
function convert(string, array) {
    for (var i = 0; i < z.length; i++) {
        if (string[i] === " ") {
            array[i] = "," + null;
        } else {
            array[i] = "," + string[i];
        }
    }
    return array;
}
console.log(convert(z,a));

//zadatak 8

var z = 13;
function number() {
    var count;
    for ( var i = 0; i < 100; i++) {
        if (i % 2 ===0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0 ) {
            count += "," + i;
            
        } else {
            count += "("+ i + ")";
        }
    } return count;
} 
console.log(number());
