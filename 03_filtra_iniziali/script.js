/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function first_letters (names, char) {
    const letters_A = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].startsWith(char)) {
            letters_A.push(names[i]);
        }
    }
    return letters_A;
}

// Invoca la funzione qui e stampa il risultato in console

const char_A = "A"
const letters_A = first_letters(names, char_A);
console.log(letters_A);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
