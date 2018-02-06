// zadatak 1
// brojevi od 0 do 15 koji su parni i koji su neparni
var i;
var paran = "paran";
var neparan = "neparan";
for (i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        console.log(i, paran);
    } else {
        console.log(i, neparan);
    }
}

// zadatak 2
// brojevi od 0 do 1000 koji su deljivi sa 3 i 5

var i;

for (i = 0; i < 1000; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "Broj je deljiv sa 3 i sa 5");
    }
    else {
        console.log(i, "Broj nije deljiv sa 3 i 5");
    }
}

// zadatak 3
// sabrati sve clanove niza

var a = [1, 2, 3, 4, 5];
var s;
var d = 0;
for (s in a) {
    d += a[s];
}
console.log(d);

// zadatak 4
// vadjenje svakog pojedinacnog clana niza

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var q;
var text = "";
for (q in x) {
    text += x[q] + "\n";
}
console.log(text);

// zadatak 5
// ???
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var w;
var e;
var niz = "";
var o = "";
for (w in a) {
    for (e in a[w]) {
        niz += a[w][e] + "\n";

    }

}
console.log(niz);


// zadatak 5.1   
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var w;
var e;
var niz = "";
var o = "";
for (w in a) {
    for (e in a[w]) {
        niz += a[w][e];

    }
    o += niz + "\n";
}
console.log(o);

// zadatak sa casa.
//naci minimum niza i poslednju poziciju gde se nalazi.

var k = [6, 5, 7, 19, 11, 18, 5, 11, 10];
var min = k[0];
var position = 0;
var i;
for (i = 0; i < k.length; i++) {
    if (k[i] <= min) {
        min = k[i];
        position = i;
    }

}
console.log(min);
console.log(min + " je na poziciji " + position);


// zadatak sa casa.
//naci max niza i poslednju poziciju gde se nalazi.

var k = [6, 5, 7, 19, 11, 18, 5, 11, 10];
var max = k[0];
var position = 0;
var i;
for (i = 0; i < k.length; i++) {
    if (k[i] >= max) {
        max = k[i];
        position = i;
    }

}
console.log(max);
console.log(max + " " + "je na poziciji " + position);


// zadatak sa casa

var n = 4;
var s = "*";
var r;
for (r = 0; r <= n - 1; r++) {
    if (r == 0 || r == n - 1) {
        // print n s symbols
        var line = "";
        for (var i = 0; i < n; i++) {
            line += s;
        }
        line += "\n";
        console.log(line);
    } else {
        // print s
        var line = "";
        line += s;
        //print n-2 spaces
        for (var i = 0; i < n - 2; i++) {
            line += " ";
        }
        //print s
        line += s;
        line += "\n";
        console.log(line);
    }
}


//Napraviti string od elemenata niza
var t = ["abc", "c", 8];
// --->"abcc8"
var line = "";
for (var i = 0; i < t.length; i++) {
    line += t[i];
}
console.log(line);



