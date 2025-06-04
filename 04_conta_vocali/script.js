/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function conta_vocali(text) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let vocali_presenti = []
    for (let i = 0; i < text.length; i++) {
        const lettere = text[i]
        if (vocali.includes(lettere)) {
            vocali_presenti.push(lettere)
        }
    }
    return vocali_presenti.length;
}

// Invoca la funzione qui e stampa il risultato in console

const numeroVocali = conta_vocali(word);
console.log(numeroVocali);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
