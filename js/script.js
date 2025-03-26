let name = document.getElementById('name'); // Definisco la variabile name che conterrà il nome che l'utente inserisce
let kmValue = document.getElementById('km'); // Definisco la variabile kmToTravel che conterrà i km che l'utente deve percorrere
let age = document.getElementById('age'); // Definisco la variabile age che conterrà la scelta effettuata dall'utente
let btn = document.querySelector('button') // Recupero il tag button e lo metto dentro la variabile btn

const priceToKm = 0.21; // Definisco le varibili per il prezzo al km e per le scontistiche
const discontUnderage = 0.8; // Definisco le varibili per il prezzo al km e per le scontistiche
const discontSenior = 0.6; // Definisco le varibili per il prezzo al km e per le scontistiche

btn.addEventListener('click', function(){ // Creo l'evento al click del button e ne definisco la funzione
    let kmToTravel = parseInt(kmValue.value) // Prendo il valore contenuto in kmValue e lo assegno alla variabile kmToTravel passandolo come valore numerico
    console.log(name.value);
    console.log(kmToTravel);
    console.log(age.value);
    
    let price = kmToTravel * priceToKm; // Prezzo finale senza scontische

    if (age.value.includes('minorenne')){ // Prima condizione se l'utente inserisce minorenne
        let finalPrice = price * discontUnderage; // Prezzo totale * sconto riservato ai minorenni
        console.log(`Il prezzo è: ${finalPrice.toFixed(2)}`); // Prezzo finale contenente il prezzo incluso di sconto
    } else if (age.value.includes('senior')){ // Seconda condizione se l'utente inserisce over 65
        let finalPrice = price * discontSenior; // Prezzo totale * sconto riservato agli over 65
        console.log(`Il prezzo è: ${finalPrice.toFixed(2)}`); // Prezzo finale contenente il prezzo incluso di sconto
    } else { // Altrimenti se inserisce maggiorenne
        let finalPrice = price; // Prezzo finale senza scontische
        console.log(`Il prezzo è: ${finalPrice.toFixed(2)}`); // Stampo prezzo finale
    }
})
