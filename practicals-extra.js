//zadatak 1
var a = function (n) {
    var b = [];
    for (var i = 0; i < n.length; i++) {
        b[2 * i + 1] = n[i];
        b[2 * i] = n[i];
    }
    return b;
}

console.log(a([1, 2, 3, 4, 5]));


//zadatak2 
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
            b[i] = a[i];
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

//zadatak 3 a)

var odd = function (a) {
    if (a.length % 2 == 1) {
        return true;
    } else {
        return console.log(false);
    }
}


// zadatak 3 b)

var count = function (a) {
    var counter = 0;
    if (odd(a)) {
        var b = (a.length - 1) / 2;
        for (var j = 0; j < a.length; j++) {
            if (a[j] < a[b]) {
                counter++;
            }
        }
    } else {
        return console.log(false);
    }
    return counter;
}

console.log(count([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


//zadatak 4
var small_and_object = function (a) {
    var min = a[0];
    var pos = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            pos = i;
        }
    }
    return {
        minimum: min,
        position: pos
    };
}

console.log(small_and_object([1, 5, 7, 9]));


//zadatak 5 a)

var less_then_given = function (a) {
    var arr1 = [];
    var given = a[2];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < given) {
            arr1[i] = a[i];
        }
    }
    return arr1;
}
console.log(less_then_given([2, 3, 5, 6, 7]));

//zadatak 5 b)

var start_with_pro = function (arr) {
    var a = "pro";
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, 3).toLowerCase() == a) {
            b[i] = arr[i];
        }
    }
    return b;
}

console.log(start_with_pro(['PrOfes', 'proaa', 'prOe', 'asda', 'kfdsas']));


//zadatak 5 c)

var combine = function (arr, f) {
    var a = "pro";
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (f(arr[i], a)) {
            b[i] = arr[i];
        }
    }
    return b;
}

console.log(combine(['PrOfes', 'proaa', 'prOe', 'asda', 'kfdsas'], function (m, n) {
    var pro = m.slice(0, 3).toLowerCase();
    if (pro == n) {
        return true;
    }
}
));

// zadatak 6.

//a)
var obj1 = {
    name: 'aple',
    price: 100
};
var obj2 = {
    name: 'milk',
    price: 80
};
var obj3 = {
    name: 'bananas',
    price: 150
};
//b)
var totalPrice = function (a, b, c) {
    return a + b + c;
}
console.log(totalPrice(obj1.price, obj2.price, obj3.price));
//c)
var average = function (a, b, c) {
    return (a + b + c) / arguments.length;
}
console.log(average(obj1.price, obj2.price, obj3.price));
//d)
function maxPrice(a, b, c) {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(maxPrice(obj1.price, obj2.price, obj3.price));




//zadatak 7 a) 


//aBcDe56 --> ABCDE56
//AFRGF78 --> AFRGF78 
//s.toUpperCase() == s

//a)
var capitals = function (a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            if (a[i].charCodeAt(j) >= 65 && a[i].charCodeAt(j) <= 90) {
                b[i] = "Velika su sva slova";
            } else {
                b[i] = "Nisu sva velika slova";
                break;
            }
        }
    }
    return b;
}

console.log(capitals(['DA', 'Ne', 'MoZdA']));

//b)

var digit = function (s) {
    var b = [];
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < s[i].length; j++) {
            if (s[i][j] == 0 || s[i][j] == 1 || s[i][j] == 2 || s[i][j] == 3 || s[i][j] == 4 || s[i][j] == 5 || s[i][j] == 6 || s[i][j] == 7 || s[i][j] == 8 || s[i][j] == 9) {
                b[i] = 'ima broj!';
                break;
            } else {
                b[i] = 'nema broj!';
            }
        }
    }
    return b;
}
console.log(digit(['5', 'lk', 'sddtrewq2']));

// c) ??????
// d) ?????
// e) ?????


//zadatak 8
var date1 = new Date();
var date2 = new Date('Mar 20 2018');

var Birthday = function (n, m) {
    var birthday = Math.ceil((n - m) / 86400000);
    return birthday;
}

console.log(Birthday(date2, date1));

//zadatak 9


var hour1 = new Date('20 Feb 2018 8:22:13');
var hour2 = new Date('20 Feb 2018 11:43:22');

var today = function (k, l) {
    var datum = new Date(k - l);
    var diference1 = datum.getHours() + ':' + datum.getMinutes() + ':' + datum.getSeconds();
    return diference1;
}
console.log(today(hour2, hour1));


//zadatk 10

function Cords(value1, value2, value3) {
    this.x = value1;
    this.y = value2;
    this.z = value3;
}

var position1 = new Cords(3, 5, 1);
var position2 = new Cords(4, -2, 3);

for (p in position1) {
    console.log(position1[p]);
}

function dif_in_space(a, b) {
    var razlika = Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2) + Math.pow((a.z - b.z), 2));
    return razlika;
}
console.log(dif_in_space(position1, position2));


//zadatak 11

//a)
var randomValue1 = function () {
    var min = 5;
    var max = 20;
    var r = Math.round((max - min) * Math.random() + min);
    return r;
}
console.log(randomValue1());

//b)

var randomValue2 = function () {
    var min = 50;
    var max = 100;
    var r = Math.round((max - min) * Math.random() + min);
    return r;
}
console.log(randomValue2());

//c)

var a = function (n, f) {
    var b = [];
    for (var i = 0; i < n; i++) {
        b[i] = f();
    }
    return b;
}

console.log(a(5,randomValue1));


