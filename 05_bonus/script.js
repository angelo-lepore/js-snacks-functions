/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

function greetings(name) {
    const now = new Date ()
    //now.setHours(18)
    console.log(now);
    const hour = now.getHours();

    let message = ""
    if (hour < 13) {
        message = "Buongiorno"
    } else if (hour <= 13 && hour < 17) {
        message = "Buon pomeriggio"
    } else {
        message = "Buonasera"
    }
    return message + " " + firstName
}

// Invoca la funzione qui e stampa il risultato in console

const firstName = "Angelo"
console.log(greetings(firstName))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
