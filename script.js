class Person {                  // tworzę klasę Person - podstawa dla klasy Studenta i Teachera
    constructor(name, surname, pesel) {          // kosntruktorem nadaje im name, surname, pesel z parametru (przy tworzseniu nowcyh person bede im w parametrze nadawal)
        this._name = name;
        this._surname = surname;
        this._pesel = pesel;
    }
    get pesel() {                           // to jest getter klasy Person ktory zwraca pesel ale po modyfikacjach!! :) np. console --> person1.pesel
        return this._pesel.replace(this._pesel.slice(1, 9), '********');
    }
    set pesel(newParam) {                   // to jest setter klasy Person ktory ustawia pesel   
        this._pesel = newParam;
    }
}
class Student extends Person {                  // tworzę klasę Student na podstawie klasy Person
    constructor(name, surname, pesel, kierunek) {          // 
        super(name, surname, pesel)                     // super(name, surname, pesel) zaciaga te atrybuty z klasy Person,
        this._kierunek = kierunek;                       // dodaje atrybut kierunek
        this._profile = 'student'                       // kazdy student bedzie mail profil student
    }
}
class Teacher extends Person {                  
    constructor(name, surname, pesel, stanowisko) {
        super(name, surname, pesel)
        this._stanowisko = stanowisko;
        this._profile = 'teacher'
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Render {    
    static addClickS(inputName, inputSurname, inputPesel, inputKierunek, container){
       var student = new Student(inputName, inputSurname, inputPesel, inputKierunek)
       studentsList.push(student)
       document.getElementById(container).innerHTML += '<div><div>' + student._name + '</div><div>' + student._surname + '</div><div>' + student.pesel + '</div><div>' + student._kierunek + '</div><div>' + student._profile + '</div><button class="removeS">Usuń</button></div>';  
    }
    static addClicksT(inputName, inputSurname, inputPesel, inputStanowisko, container){
        var teacher = new Teacher(inputName, inputSurname, inputPesel, inputStanowisko)
        teachersList.push(teacher)
        document.getElementById(container).innerHTML += '<div><div>' + inputName + '</div><div>' + inputSurname + '</div><div>' + teacher.pesel + '</div><div>' + teacher._stanowisko + '</div><div>' + teacher._profile + '</div><button class="removeT">Usuń</button></div>';
    }
}

var teachersList =[];
var studentsList = [];

function start() {
    if (document.getElementById('inputStudent').checked === true){
    Render.addClickS(inputName.value, inputSurname.value, inputPesel.value, inputKierunek.value, 'recordsS');   
    } else {
        Render.addClicksT(inputName.value, inputSurname.value, inputPesel.value, inputStanowisko.value, 'recordsT');  
    }
               // funckja move odpowwiada za ruch graczy po planszy i sprawdza czy nie wykorcyzli poza pole do gry
}

document.getElementById('addButton').addEventListener('click', start)  




