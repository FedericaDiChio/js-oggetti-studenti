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
    },

    {name: "Giacomo", 
    surname: "Puccini", 
    },

    {name: "Antonio", 
    surname: "Vivaldi", 
    },

    {name: "Giuseppe", 
    surname: "Verdi", 
    }
]

// console.log(students)


// Recuperiamo elemento HTML 
var studentsDataElement = document.getElementById("student-data");
// Creiamo variabile di appoggio 
var listData = "";


// Ciclo for per recuperare proprietà da stampare 
for (var i= 0; i < students.length; i++) {
    console.log(students[i])
    // var currentStudents = students[i];
    listData += "<li>" + "Nome" + ": " + students[i].name + "</li>";
    listData += "<li>" + "Cognome" + ": " + students[i].surname + "</li>";
    // listData += "<li>" + "Età" + ": " + students[i].age + "</li>";
}

// Stampiamo in pagina  
studentsDataElement.innerHTML = listData;