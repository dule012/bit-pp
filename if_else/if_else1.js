// najmanju vrednost izjednaci sa 1 pa saberi sve tri vredonsti
var p1 = 110;
var p2 =20;
var p3 = 50;
var min = 1;
if (p1 < p2 && p1 < p3) {
    p1 = min
    console.log(p1 + p2 + p3);
} else if (p2 < p1 && p2 < p3) {
    p2 = min
    console.log(p1 + p2 + p3);
} else if (p3 < p2 && p3 < p1) {
    p3 = min
    console.log(p1 + p2 + p3);
}
