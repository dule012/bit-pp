//zadatak 1 niz, callback fja koja kvadrira vrednost zadatog broja niza
var arr = [3, 4, 6, 7];
function multiple(n) {

    return n * n;
}
function square(a, f) {
    for (var i = 0; i < a.length; i++) {
        a[i] = f(a[i]);
    }
    return a;
}

console.log(square(arr, multiple));

//zadatak 2 small-->8   large-->590    huge--->234567
var a = "s"
function small() {
    return 8;
}
function large() {
    return 590;
}
function huge() {
    return 234567;
}

function number(f) {
    if (typeof arguments[0] === "function") {
        return f();
    } else {
        return "greska";
    }
}
console.log(number(huge));


//zadatak 3 sabrati elemente niza na istoj poziciji

var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

function sumArr(a, b, f) {
    var c = [];
    for (var i = 0; i < a.length; i++) {
        c[i] = f(a[i], b[i])
    }
    return c;
}


function addTwoNums(a, b) {
    return a + b;
}
console.log(sumArr(arr1, arr2, addTwoNums));






//-----------------------------------------
var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

function sumArr(a, b, f, g) {
    var c = [];
    var k = 0;
    for (var i = 0; i < a.length; i++) {
        c[i] = f(a, k, i) + g(b, k, i);
    }
    return c;
}
console.log(sumArr(arr1, arr2, first, second));

function first(v, s, w) {
    return arguments[s][w];
}
function second(m, q, r) {
    return arguments[q][r];
}




//------------------------------------------------------------------
function fullName(name, surname) {
    return function () {
        console.log(name + "." + surname + "@gmail.com");
    }
}

fullName("Acilije", "Miloradovic")();

//zamena a sa * u stringu

var x = (function (s) {
    var c = '';
    var counter= 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "a") {
            c += "*";
            counter++;
        } else {
            c += s[i];
        }
    }
    console.log(c);
    return counter;
})("javascript");
console.log(x);