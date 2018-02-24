'use strict';

(function () {
    console.log("Hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }
    var personA = new Person('John', 'Snow');
    var personB = new Person('Cersei', 'Lanister');
    var personC = new Person('Daenerys', 'Targaryen');
    var personD = new Person('Tyrion', 'Lanister');


    function Seat(number, category) {
        this.number = number || Math.floor(90 * Math.random() + 10);
        this.category = category || 'e';
        this.getData = function () {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }
    var seatA = new Seat(1, 'b');
    var seatB = new Seat(2, 'b');
    var seatC = new Seat(14);
    var seatD = new Seat();


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.number + ', ' + this.seat.category.toUpperCase() + ', ' + this.person.name.charAt(0).toUpperCase() + this.person.surname.charAt(0).toUpperCase();
        }
    }

    var passengerA = new Passenger(personA, seatA);
    //var passengerB = new Passenger(new Person('Zika', 'Zikic'), new Seat(12, 'e')); !!!!!!
    var passengerB = new Passenger(personB, seatB);
    var passengerC = new Passenger(personC, seatC);
    var passengerD = new Passenger(personD, seatD);



    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.addPassanger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            var flightInfo = '\t' + this.date + ', ' + this.relation + '\n';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                flightInfo += '\t' + '\t' + this.listOfPassengers[i].getData() + '\n';
            }
            return flightInfo;
        }
    }

    var flightA = new Flight('Belgrade - Paris', 'Oct 25 2017');


    flightA.addPassanger(passengerA);
    flightA.addPassanger(passengerB);
    //console.log(flightA.getData());

    var flightB = new Flight('Barcelona - Belgrade', 'Nov 11 2017');
    flightB.addPassanger(passengerC);
    flightB.addPassanger(passengerD);


    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getData = function () {
            var airportInfo = 'Airport:' + this.name + ', ' + 'total_passengers:';
            var numberOfPassengers = 0;
            for (var a = 0; a < this.listOfFlights.length; a++) {
                numberOfPassengers += this.listOfFlights[a].listOfPassengers.length;
            }
            airportInfo += numberOfPassengers + '\n';
            for (var d = 0; d < this.listOfFlights.length; d++) {
                airportInfo += '\t' + this.listOfFlights[d].date + ', ' + this.listOfFlights[d].relation + '\n';
                for (var g = 0; g < this.listOfFlights[d].listOfPassengers.length; g++) {
                    airportInfo += '\t' + '\t' + this.listOfFlights[d].listOfPassengers[g].seat.getData() + ', '+ this.listOfFlights[d].listOfPassengers[g].person.getData() + '\n';
                }
            }
            return airportInfo;
        }
    }

    var airport1 = new Airport();
    airport1.addFlight(flightA);
    airport1.addFlight(flightB);
    console.log(airport1.getData());



    function createFlight(relation, date) {
        return new Flight(relation, date);

    }

    var createFlight1 = createFlight('Belgrade - New York', 'Oct 25 2017');
    var createFlight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');



    function createPassenger(person, seat) {
        return new Passenger(person, seat);
    }

    var createPassengerA = createPassenger(personA, seatA);
    var createPassengerB = createPassenger(personB, seatB);
    var createPassengerC = createPassenger(personC, seatC);
    var createPassengerD = createPassenger(personD, seatD);
    
})();