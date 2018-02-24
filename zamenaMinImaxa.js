//Domaci zamena min i max u nizu
var f = [1, 9, 4, 5, -2, 7];
var h = f[0];
var k = f[0];
var j;
var position1;
var position2;
var u;
var z;
var q;
var p;
    for (u = 0; u < f.length; u++) {
        if (f[u] < h) {
            h = f[u];
            position1 = u;
            
        }
        if (f[u] > k) {
            k = f[u];
            position2 = u;
        }
    }
    for (p in f) {
        if (p == position1) {
            f[p] = k;
        }
        if (p == position2) {
            f[p] = h;
        }
    }

console.log(f);
console.log(k + " max pozicija " + position2);
console.log(h + " min pozcija " + position1);
console.log(f[1]);
console.log(f[4]);



