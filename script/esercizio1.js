/*
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 */





// Creiamo l'oggetto student aggiungendo le proprietà necessarie
var student = {
    name: "Pinco",
    surname: "Pallo",
    age: 37
}

// Recuperiamo elemento HTML 
var studentDataElement = document.getElementById("student-data");
// Creiamo variabile di appoggio 
var listData = "";

// Ciclo FOR IN per recuperare le proprietà dell'oggetto da stampare 
for (var key in student) {
    listData += "<li>" + key + ": " + student[key] + "</li>";
}

// Stampiamo in pagina  
studentDataElement.innerHTML = listData;