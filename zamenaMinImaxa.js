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
for (j = 0; j < f.length; j++) {
    for (u = 0; u < f.length; u++) {
        if (f[u] < h) {
            h = f[u];
            position1 = u;
            z = f[position1];
        }
        if (f[u] > k) {
            k = f[u];
            position2 = u;
            q = f[position2];
        }
    }
    for (p in f) {
        if (p == position1) {
            f[p] = q;
        }
        if (p == position2) {
            f[p] = z;
        }
        console.log(f);
    }
}
console.log(k + " max pozicija " + position2);
console.log(h + " min pozcija " + position1);
console.log(f[1]);
console.log(f[4]);



