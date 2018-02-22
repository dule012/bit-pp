'use strict';

(function () {
    console.log('Hi');

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var nameAcr = this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();
            return nameAcr;
        }
    }
    var action = new Genre('action');
    console.log(action.getData());

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre.name;
        this.length = length;
        this.getData = function () {
            return this.title + ', ' + this.length + 'min ' + ', ' + genre.getData();
        }
    }
    var movie1 = new Movie('Wrong Turn', action, 100);
    console.log(movie1.getData());
    var movie2 = new Movie('Maratonci','Comedy',90);

    function Program(date) {
        this.date = new Date(date);
        this.addMovie = function (movie) {
            return this.ListOfMovies.push(movie);
        }
        this.ListOfMovies = [];
        this.TotalNumberOfMovies = function () {
            return this.ListOfMovies.length;
        }
        this.getData = function () {
            var infoProgram = this.date + ', ' + this.ListOfMovies.length - 1 + ',' + '\n';
            for (var k = 0; k < this.ListOfMovies.length; k++) {
                infoProgram += this.ListOfMovies[i] + ', ' + this.ListOfMovies[i].title + ', ' + this.ListOfMovies[i].length + ', ' + this.ListOfMovies[i].genre + '\n';    //movie.getData kao iz primera treba da se uradi,mozda moze ovako
            }
            return infoProgram;
        }
        this.durationMovie = function () {
            var duration = 0;
            for (var m = 0; m < this.ListOfMovies.length; m++) {
                duration += this.ListOfMovies[i].legnth;
            }
            return duration;
        }
    }

    var program1 = new Program('Mar 25 2019');
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    console.log(program1.ListOfMovies);


    function Festival(name, AllMoviesInAllPrograms) {
        this.name = name;
        this.ListOfPrograms = [];
        this.AllMoviesInAllPrograms = function () {
            var NumbersOfMovie = 0;
            for (var i = 0; i < this.ListOfPrograms.length; i++) {
                for (var j = 0; j < this.ListOfPrograms[i].length; j++) {
                    //??? festival --> broj programa --> broj filmova u programu 
                }
            }
        }
        this.addProgram = function (program) {
            return this.ListOfPrograms.push(program);
        }
        this.getData = function () {
            var infoFestival = 'Weekend festival has ' + program.ListOfMovies.length - 1 + 'movie titles' + '\n';
            for (var l = 0; l < this.ListOfPrograms.length; l++) {
                infoFestival += '\t' + this.ListOfPrograms[l].date + ', ' + this.ListOfPrograms[l].durationMovie() + '\n';
                for (var n = 0; n < this.ListOfPrograms[l].ListOfMovies.length; n++) {
                    infoFestival += '\t' + '\t' + this.ListOfPrograms[l].ListOfMovies[n] + '\n';
                }
            }
            return infoFestival;
        }
    }

/*(function(){
    fucntion CreateMovie(movie){
        return
    }
})(movie);
*/
})();




            //var action = new Genre("action");
            //var superman = new Movie("Superman", action, 130)


