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




//zadatak 7 a)  zavrsiti do kraja 


//aBcDe56 --> ABCDE56
//AFRGF78 --> AFRGF78 
//s.toUpperCase() == s
var capitals = function (a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            if (!(a[i].charCodeAt(a[i][j]) >= 65 && a[i].charCodeAt(a[i][j]) < 90)) {
               break;
                
            } 
        }
        b[i] = "Velika slova";
    }
    return b;
}

console.log(capitals(['DA', 'Ne', 'MoZdA']));