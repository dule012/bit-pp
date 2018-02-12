// zadatak 2.

var x = ["r", "t", "u"];
var y = [1, 2, 3];
var c = [];

function combines(a, b) {
    var i = 0;
    var j = 0;
    var k = 0;
    for (i = 0, j = 0; i < a.length && j < b.length; i++ , j++) {
        c[k] = a[i];
        k++;
        c[k] = b[j];
        k++;
    } return c;
}
console.log(combines(x, y));


// zadatak 3 


var a = [0, 4, 5, 9, 8];
var c = [];
function replacing(b, n) {
    var i;
    for (i = 0; i < b.length; i++) {
        if (i >= n) {
            c[i - n] = a[i];
        } else {
            var l = n;
            for (var j = 0; j < n; j++ , l--) {
                c[b.length - l] = b[j];
            }
        }

    }
    return c;
}
console.log(replacing(a, 3));



// zadatak 4.


function array(a) {
    var ar = [];
    var string = a + "";
    for (var i = 0; i < string.length; i++) {
        ar[i] = string[i];
    }
    return ar;
} 


console.log(array(156));



//zadatak 5
function multiple() {
    var mult = "";
    for (var i = 1; i <13; i++){
        for (var j = 1; j<13; j++){
            mult += i * j + " ";
        }
        mult += "\n";
    }
    return mult;
}
console.log(multiple());