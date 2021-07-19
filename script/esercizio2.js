/* 
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto 
studente inserendo nell’ordine: nome, cognome e età.

*/

// Array con oggetti studenti 
var students = [
    {Name: "Gioacchino", 
    Surname: "Rossini", 
    },

    {Name: "Giacomo", 
    Surname: "Puccini", 
    },

    {Name: "Antonio", 
    Surname: "Vivaldi", 
    },

    {Name: "Giuseppe", 
    Surname: "Verdi", 
    }
]


// Recuperiamo elemento HTML 
var studentsDataElement = document.getElementById("student-data");
// Creiamo variabile di appoggio 
var listData = "";



var userName = prompt("Scegli un nome");
var userSurname = prompt("Scegli un cognome");
var userAge = prompt("Scegli un'età");


var newStudent = {
    Name: userName,
    Surname: userSurname,
    Age: userAge
}

students.push(newStudent);

// console.log(students)
// Ciclo for per recuperare proprietà da stampare 
for (var i= 0; i < students.length; i++) {
    var currentStudent = students[i]
    for(var key in currentStudent) {
        listData += "<li>" + key + ": " + currentStudent[key] + "</li>";
    }
}

// Stampiamo in pagina  
studentsDataElement.innerHTML = listData;

