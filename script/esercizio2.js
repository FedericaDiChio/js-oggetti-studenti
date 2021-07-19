/* 
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto 
studente inserendo nell’ordine: nome, cognome e età.

*/

// Array con oggetti studenti 
var students = [
    {name: "Gioacchino", 
    surname: "Rossini", 
    age: 17},

    {name: "Giacomo", 
    surname: "Puccini", 
    age: 27},

    {name: "Antonio", 
    surname: "Vivaldi", 
    age: 37},

    {name: "Giuseppe", 
    surname: "Verdi", 
    age: 47}
]

// console.log(students)


// Recuperiamo elemento HTML 
var studentsDataElement = document.getElementById("student-data");
// Creiamo variabile di appoggio 
var listData = "";


for (var i= 0; i < students.length; i++) {
    console.log(students[i])
    // var currentStudents = students[i];
    listData += "<li>" + "Nome" + ": " + students[i].name + "</li>";
    listData += "<li>" + "Cognome" + ": " + students[i].surname + "</li>";
    listData += "<li>" + "Età" + ": " + students[i].age + "</li>";
}

// // Stampiamo in pagina  
studentsDataElement.innerHTML = listData;