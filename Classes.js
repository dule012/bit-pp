class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    personData() {
        return `${this.name}  ${this.surname}`;
    }
}
class Programer extends Person {
    constructor(name, surname, language) {
        super(name, surname);
        this.language = language;
        this.newLanguage = [this.language];
    }
    ProgramerData() {
        return `${super.personData()} ${this.newLanguage}`;
    }
    learnedNewLanguage(newL) {
        this.newLanguage.push(newL);
    }
}
var person1 = new Person('Aca', 'Miloradovic');
var programer1 = new Programer('Aca', 'Miloradovic', 'JavaScript')

programer1.learnedNewLanguage('PHP');
programer1.learnedNewLanguage('Java');
programer1.learnedNewLanguage('React');
console.log(programer1.ProgramerData());


