// zadatak 5.
var string = "write a function to split a string";

function SplitString(string) {
    var split = string.split("");
    return split;
}
console.log(SplitString(string));

// zadatak 5 drugi nacin

var string = "write a function to split a string";
var split = string.split(" ");

console.log(split);

// zadatak 6.

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Aca Dusan"));


//------------------------------------------
var s = "Kako je dobro danas";
function abberivated(n) {
    var f = n.split("");
    var g = '';
    for (var i = 0; i < f.length; i++) {
        if (i === 8) {
            break;
        } else {
            g += f[i];
        }
    }
    return g;
}
console.log(abberivated(s));


// Zadatak 8.


function capitalize(a) {
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (i === 0) {
            b += a[i].toUpperCase();
        } else {
            b += a[i];
        }
    } return b;
}
console.log(capitalize("da li je moguce ovo. Is it real?"));

//zadatak 9
function hidepsw(n) {
    var a = '';
    for (var i = 0; i < n.length; i++) { 
        if( n[i]== '@'){
            a +='@';
        }else{
        a += '*';
        }
    }
    return a;
}
console.log(hidepsw('12d345@gmail.com'));
