// zadatak sa casa
// spajanje dva sortirana niza od mina do maxa

var x = [1, 8, 9, 10];
var y = [4, 5, 7];
function merge(a, b) {

    // idex of the element in the array a
    var i;
    // idex of the element in the array b
    var j;
    // idex of the element in the array c
    var k;
    // final array
    var c = [];

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
        // a[i], b[j]
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        }
        else {
            c[k] = b[j];
            j++;
        }
    }
    if (i == a.length) {
        for (; j < b.length; j++) {
            c[k] = b[j];
            k++;
        }
    } else {
        for (; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }
    return c;
}
console.log(merge(x, y));


// zadatak spajanje dva niza tako sto nadovezuje 2 niza 
var q = [3, 4, -2];
var w = [8, 7];

function collapse(a, b) {
    var c = [];
    var i;
    var j;
    var k = 0;
    for (i = 0; i < a.length; i++ , k++) {
        c[k] = a[i];
    }
    for (j = 0; j < b.length; j++ , k++) {
        c[k] = b[j];
    }
    return c;
}

console.log(collapse(q, w));


//
var e = [3, 8, 7];
var r = [6, 4, 13];

function lorem(a, b) {
    var c = [];
    var i = 0;
    var j = 0;
    var k = 0;
    for (i = 0, j = 0; i < a.length; i++ , j++ , k++) {
        c[k] = a[i];
        k++
        c[k] = b[j];

    }
    return c;
}
console.log(lorem(e, r));

// drugi nacin
var e = [3, 8, 7];
var r = [6, 4, 13];

function lorem(a, b) {
    var c = [];
    var i = 0;
    var j = 0;
    var n = 0;
    var m = 0;
    var k = 0;
    var l = 0;
    for (i = 0; i < a.length; i++ , n++) {
        var k = 2 * n + 1;

        c[k] = a[i];


    }
    for (j = 0; j < b.length; j++ , m++) {

        c[l] = b[j];
        l = 2 * m + 2;

    }
    return c;
}
console.log(lorem(e, r));

// treci nacin

var a = [3, 8, 7];
var b = [6, 4, 13];
var k= a.length + b.length;
var j = 0;
var l = 0;
var c = [];

for(var i = 0; i < k; i++) {
    if(i % 2 === 0) {
        c[i] = a[j];
        j++;
    } else {
        c[i] = b[l];
        l++;
    }
}

console.log(c);

