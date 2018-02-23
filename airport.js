'use strict';

(function () {
    console.log("Hi");
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + this.surname;
        }
    }
    var personA = new Person('Pera', 'Peric');
    console.log(personA.getData());

    function Seat(number, category) {
        this.number = number || Math.floor(90 * Math.random() + 10);
        this.category = category || 'e';
        this.getData = function () {
            return this.number + this.category;
        }
    }
    var seatA = new Seat();
    console.log(seatA.getData());


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.number + ', ' + this.seat.category.toUpperCase() + ', ' + this.person.name.charAt(0).toUpperCase() + this.person.surname.charAt(0).toUpperCase();
        }
    }

    var passengerA = new Passenger(personA, seatA);
    var passengerB = new Passenger(new Person('Zika', 'Ziki'), new Seat(12, 'e'));
    console.log(passengerA);

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.addPassanger = function (passenger) {
            return this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            var flightInfo = '\t' + this.date + ', ' + this.relation + '\n';
            for (var i = 0; i < this.listOfPassengers; i++) {
                flightInfo += '\t' + '\t' + i + '.' + this.listOfPassengers[i].getData() + '\n';
            }
            return flightInfo;
        }
    }
    var flightA = new Flight('Belgrade - Paris', 'Oct 25 2017');
    console.log(flightA.getData());


    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            return this.listOfFlights.push(flight);
        }

    }

    function createFlight(relation, date) {
        var a = new Flight(relation, date);
        return a;
    }
    var createFlight1 = createFlight('Belgrade - New York', 'Nov 22 2017');
    console.log(createFlight1.getData());




})();



