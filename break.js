var res = '';

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        res += '*\t';
    }
    res += '\n';
}

console.log(res);

//zadatak sa casa BREAK

var i = 0;

while (i < 5) {
    console.log("JS");
    if (i == 3) {
        break;
    }
    i++;
}
console.log('\n');


//

var i = 0;

while (true) {
    if (i == 7) {
        break;
    }
    console.log("js");
    i++;
}


//continue;


var i = 0;

for (i = 0; i < 10; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i);
}
































