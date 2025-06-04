/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function first_letters (names) {
    const initials = [];
    for (let i = 0; i < names.length; i++) {
         initials.push(names[i].charAt(0));
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console

const inizials = first_letters(names);
console.log(inizials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]