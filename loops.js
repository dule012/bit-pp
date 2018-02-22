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
    if (j == position1) {
        f[j] = q;
    }
    if (j == position2) {
        f[j] = z;
    }
}
console.log(k + " max pozicija " + position2);
console.log(h + " min pozcija " + position1);
console.log(f[1]);
console.log(f[4]);



//Function excercises 11.zadatak

var a = ["1", "2", undefined, "1e+3", Infinity, "21"];
var b = [];
function checkString() {
    var position = 0;
    for (var i = 0; i < a.length; i++) {
        if (typeof (a[i]) === "string") {
            if (a[i] == Number(a[i])) {
                b[position] = Number(a[i]);
                position++

            }
        }
    }
    return b;
}
console.log(checkString(a, b));


// Pravljenje trougla od hashtagova
function triangle() {
    var hash = '#';
    var sum = '';
    var i = 0;
    for (i = 0; i < 7; i++) {
        var j = 0;
        while (j < i) {
            sum += hash;
            j++;
        }
        sum += '\n';
    }
    return sum;
}
console.log(triangle());





print("This might work or not?");

var print = (function () {
    return console.log;
})();



var PI = 3.1;

function circleSurface(radius) {
    var result = radius * radius * PI;
    var PI = 3.14159;

    return result;
}

var output = circleSurface(5);
console.log(output);




var cubeVolume = function (a) {
    return a * a * a;
}

function cubeCalculation(a, calc) {
    return calc(a);
}

output = cubeCalculation(10, cubeVolume(6))
console.log(output);


function saySomething(msg1) {
    function message(msg2) {
        var output = msg1 + " " + msg2;
        var result = function () {
            output += "!"
            console.log(output);
        }
        return result;
    }
    return message;
}

saySomething("Hi")("there")()



function unless(test, then) {
    if (test == 0) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(3, function (n) {
    unless(n % 2, function () {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even



window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        document.getElementById("myDropdown").classList.remove('show');
    }
}





window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}




function zvezda(n) {
    var a = '';
    for (var i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            for (var j = 0; j < n; j++) {
                a += '*';
            }
        } else {
            for (var j = 0; j < n; j++) {
                if (j === 0 || j === n - 1) {
                    a += '*';
                } else {
                    a += ' ';
                }
            }
        }
        a += '\n';

    }
    return a;
}
console.log(zvezda(5));

var a = [3, 4, 5, 7, 1];

function mini(n) {
    var min = n[2];
    for (var i = 0; i < n.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}
console.log(mini(a));

//zadatak 10
var s = 'saDa';

function probamo(n) {
    var f = '';
    for (var i = 0; i < n.length; i++) {
        if (n[i] == n[i].toLowerCase()) {
            f += n[i].toUpperCase();
        } else if (n[i] == n[i].toUpperCase()) {
            f += n[i].toLowerCase();
        }
    }

    return f;
}
console.log(probamo(s));


//

var removeMultipleElements = function (a) {
    var b = [];

    for (var i = 0; i < a.length; i++) {
        var counter = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                counter++;
            }
        }
        if (counter > 1) {
            a.splice(i, 1);
        } else {
            b[i] = a[i];
        }
    }
    b = a;
    var c = b.sort(function (a, b) { return a - b; });
    return c;

}

console.log(removeMultipleElements([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

