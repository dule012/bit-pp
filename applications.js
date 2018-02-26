function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

var web1 = new WebApp('Ducko', 25481549, 'react', 'none', 12);
var web2 = new WebApp('Acko', 0523154, 'java', 'Creative Commons', 4);
var mob1 = new MobileApp('Boro', 'nema', 'Creative Commons', 6);
var mob2 = new MobileApp('Zoro', 'ima', 'none', 8);

WebApp.prototype.getData = function () {
    console.log(this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.licence + ' ' + this.stars);
}

web1.getData();

WebApp.prototype.reactBased = function () {
    if (this.technologies == 'react') {
        console.log('Aplication has React');
    }
    else {
        console.log('Aplication has not React');
    }
}

MobileApp.prototype.getData = function () {
    console.log(this.name + ' ' + this.platforms + ' ' + this.licence + ' ' + this.stars);
}

mob2.getData();

MobileApp.prototype.forAndroid = function () {
    if (this.platforms == 'android') {
        console.log('Aplication is developed for android');
    }
    else {
        console.log('Aplication is not developed for android');
    }
}

var Both = {
    isCCLicence: function () {
        if (this.licence == 'Creative Commons') {
            console.log('Aplication is CC');
        }
        else {
            console.log('Aplication is not CC');
        }
    },

    like: function () {
         return this.stars++
         
    },

    showStars: function () {
        console.log(this.stars);
    }
}




WebApp.prototype.__proto__ = Both;
MobileApp.prototype.__proto__ = Both;
web1.like();

web1.showStars();
console.log(mob1.__proto__ == MobileApp.prototype )
console.log(MobileApp.prototype.__proto__ == Both )