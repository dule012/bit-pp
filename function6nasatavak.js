
//zadatak 6
var C_convert_in_F = function (c) {
    var f_nula = 32;
    var farenhajt;
    return farenhajt = c * 1.8 + f_nula;
}
console.log(C_convert_in_F(5));

//zadatak 7
var s = [2, 4, 5, "m", 6, 7];
function max_and_delete(a) {
    var b = a[0];
    var max;
    var c = [];
    var k = 0;
    for (var i = 0; i < a.length; i++) {
        if (typeof (a[i]) != "number") {
            delete a[i];
        } else if (a[i] > b) {
            max = a[i];
        }
    }
    return a;
}
console.log(max_and_delete(s));

//zadatak 8
var we = [2, 6, 14, 8, 12];
var min_max_newArray = function (a) {
    var t = a[1];
    var max, min;
    var c = [];
    var k = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > t) {
            max = a[i]
            c[k] = a[i];
        } else if (a[i] < t) {
            min = a[i];
            c[k + 1] = a[i];
        }
    }
    return c;
}
console.log(min_max_newArray(we));

//zadatak 9
var ki = ['s', 'a', 3, true, 12, 7, 8];
var median_array = function (a) {
    var median;
    if (a.length % 2 === 0) {
        median = a.length / 2;
    } else {
        median = (a.length - 1) / 2 + 1;
    }
    return median;
}
console.log(median_array(ki));

//zadatak 10 
var vb = [1, 2, 3, 4, 4, 4, 6, 7, 7, 7, 7, 7];
var most_frequently = function (a) {
    var k, sum, position, l, b, maxReapeting, mesto_max_reapet;
    l = 0;
    position = [];
    sum = 0;
    maxReapeting = 0;
    mesto_max_reapet = 0;
    for (var i = 0; i < a.length; i++) {
        k = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                k++;
                sum = k;
            }
        }
        position[l] = sum;
        l++;
    }
    b = position[0];
    for (var h = 0; h < a.length; h++) {
        if (position[h] > b) {
            maxReapeting = position[h];
            mesto_max_reapet = h;
        }
    }
    var poruka = "element koji se najvise ponavlja je " + a[mesto_max_reapet];
    return poruka;
}
console.log(most_frequently(vb));


//zadatak 11
var as = [2, 3, 5, 6, 7, 8];
var first_middle_last = function (a) {
    var c = [];
    var k = 0;
    if (a.length % 2 === 0) {
        c[k] = a[k];
        k++;
        c[k] = a[a.length - 1];
    } else {
        k = 0;
        c[k] = a[k];
        k++;
        c[k] = a[(a.length - 1) / 2];
        k++;
        c[k] = a[a.length - 1];
    }
    return c;
}
console.log(first_middle_last(as));


//zadatak 12
var average_dynamic = function () {
    var suma = 0;
    var average;
    for (var i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    average = suma / arguments.length;
    return average;
}
console.log(average_dynamic(2, 3));

//zadatak 13
var w = [2, 3, 4, 5, 6, 7];
var greater_then_average = function (a) {
    var sum = 0;
    var average;
    var s = [];
    var k = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    average = sum / a.length;
    for (var j = 0; j < a.length; j++) {
        if (a[j] > average) {
            s[k] = a[j];
            k++;
        }
    }
    return s;
}
console.log(greater_then_average(w));


//zadatak 14   nesto malo zeza
var body_mass_index = function (kg, height) {
    var bmi;
    var message;
    bmi = kg / height * height;

    if (bmi < 17) {
        message = "Starvation";
    } else if (bmi > 15 && bmi < 17.5) {
        message = "Anorexic";
    } else if (bmi > 17.5 && bmi < 18.5) {
        message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        message = "Ideal";
    } else if (bmi > 25 && bmi < 30) {
        message = "Overweight";
    } else if (bmi >= 30 && bmi < 40) {
        message = "Obese";
    } else if (bmi > 40) {
        message = "Morbidly";
    }
    return message;
}
console.log(body_mass_index(72, 1.86));

//zadatak 15
var s = ["Hello", "World", "in", "a", "frame"];
var frame_star = function (v) {
    var stars = "";
    var n = 0;
    var k =0;
    var h;
    var stars1 = "";
    for (var i = 0; i < 8; i++) {
        if (i === 0 || i === 7) {
            for (var j = 0; j < 10; j++) {
                stars += "*";
            }
        } else {
            for (k = 0; k < 10; k++) {
                stars1 = "";
                if (k === 0 || k === 9) {
                    stars1 += "*";
                }else if (k === 1 || k === 8) {
                    stars1 += " ";
                } else {
                   stars1 += v[n];
                    n++;
            }
        }
    }
    stars1 +="\n";
}
}
console.log(frame_star(s));
