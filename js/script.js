let nameField = document.getElementById('name-field'); // Definisco la variabile nameField che conterrà il nome che l'utente inserisce
let kmValue = document.getElementById('km'); // Definisco la variabile kmToTravel che conterrà i km che l'utente deve percorrere
let age = document.getElementById('age'); // Definisco la variabile age che conterrà la scelta effettuata dall'utente
let btnSuccess = document.getElementById('conferma') // Recupero il tag button e lo metto dentro la variabile btn

let results = document.getElementById('result');

let userName = document.getElementById('user-name');
let ticketDiscount = document.getElementById('ticket-discount');
let trainCar = document.getElementById('train-car');
let cpCode = document.getElementById('cp-code');
let ticketPrice = document.getElementById('ticket-price');
console.log (userName, ticketDiscount, trainCar, cpCode, ticketPrice)

const priceToKm = 0.21; // Definisco le varibili per il prezzo al km e per le scontistiche
const discontUnderage = 0.8; // Definisco le varibili per il prezzo al km e per le scontistiche
const discontSenior = 0.6; // Definisco le varibili per il prezzo al km e per le scontistiche

let paragraph = document.querySelector('p')

btnSuccess.addEventListener('click', function(event){ // Creo l'evento al click del button e ne definisco la funzione
    event.preventDefault()
    let kmToTravel = parseInt(kmValue.value.trim()) // Prendo il valore contenuto in kmValue e lo assegno alla variabile kmToTravel passandolo come valore numerico
    console.log(nameField.value);
    console.log(kmToTravel);
    console.log(age.value);
    
    let string
    let price = kmToTravel * priceToKm; // Prezzo finale senza scontische

    results.className = results.className.replace(`d-none`, `d-block`)

    userName.innerHTML = nameField.value.trim();
    trainCar.innerHTML = Math.floor(Math.random() * 10 + 1);
    cpCode.innerHTML = Math.floor(Math.random() * (100000 - 10000) + 1);

    if (age.value.includes('minorenne')){ // Prima condizione se l'utente inserisce minorenne
        let finalPrice = price * discontUnderage; // Prezzo totale * sconto riservato ai minorenni
        ticketDiscount.innerHTML = `Sconto del 20%`;
        ticketPrice.innerHTML = `${finalPrice.toFixed(2)}&euro;`;

    } else if (age.value.includes('senior')){ // Seconda condizione se l'utente inserisce over 65
        let finalPrice = price * discontSenior; // Prezzo totale * sconto riservato agli over 65
        ticketDiscount.innerHTML = `Sconto del 40%`;
        ticketPrice.innerHTML = `${finalPrice.toFixed(2)}&euro;`;
    } else { // Altrimenti se inserisce maggiorenne
        let finalPrice = price; // Prezzo finale senza scontische
        ticketDiscount.innerHTML = `Biglietto standard`;
        ticketPrice.innerHTML = `${finalPrice.toFixed(2)}&euro;`;
    }
})


