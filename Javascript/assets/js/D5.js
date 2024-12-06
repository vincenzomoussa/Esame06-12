/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish'];

console.log("Esercizio 1");

function stampaOgniElemento () {
  for (let i=0; i < pets.length; i++) {
    console.log(pets[i])
  }
}

stampaOgniElemento();

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("Esercizio 2");

/* Utilizziamo un normale sort() in questo caso, perchè gli elementi dell'array PETS non presentano lettere maiuscole e quindi 
non necessitiamo di una verifica per controllare che prima di ordinarle alfabeticamente siano tutte lettere minuscole, altrimenti avremmo dovuto inserire
una struttura di controllo IF/ELSE */

function ordineAlfabeticoPets (pets) {
  pets.sort();
  return pets;
}

const ordineAlfabetico = ordineAlfabeticoPets(pets);
console.log(ordineAlfabetico);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Esercizio 3");

/* Stesso discorso dell'esercizio precedente. Abbiamo solo lettere minuscole, quindi l'ordine alfabetico invertito risulta molto più semplice */

function ordineInvertitoPets (pets) {
  pets.reverse();
  return pets;
}

const ordineInvertito = ordineInvertitoPets(pets);
console.log(ordineInvertito);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("Esercizio 4");

function primoUltimo (pets) {
  pets.push(pets.shift())
  return pets
}

const primoUltimoPets = primoUltimo(pets);
console.log(primoUltimoPets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("Esercizio 5");

/* Andiamo a generare delle targhe random da inserire poi in ogni oggetto contenuto nell'array CARS. */

  function targaRandom() {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let targa = '';
  for (let i = 0; i < 2; i++) {
    targa += letters.charAt(Math.floor(Math.random() * letters.length));
  } /* Cioè andiamo a generare la parte delle lettere in modo randomico, facendoci dare un numero random e intero soprattutto (la lunghezza sarà di 2 caratteri, visto che l'indice massimo è 1)*/
  for (let i = 0; i < 3; i++) {
    targa += numbers.charAt(Math.floor(Math.random() * numbers.length));
  } /* Qui invece abbiamo generato dei numeri random presi da 0 a 9 per la parte numerica della nostra targa */
  return targa;
}

cars.forEach(car => {
  car.licensePlate = targaRandom();    /* Qui andiamo ad inserire, con un arrow function, in ogni oggetto dell'array CARS il risultato della nostra funzione che creava una targa random (la lunghezza sarà di 3 numeri, visto che l'indice massimo è 2) */
});

console.log(cars); 

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6");

let ultimaMacchina = {
  brand: 'Lamborghini',
  model: 'Gallardo',            /* Questo è il nostro nuovo oggetto da inserire nell'array "Cars" */
  color: 'yellow',
  licencePlate: 'AO243',
  trims: ['velocissima', 'tantoveloce'],
}

cars.push(ultimaMacchina);          /* Con il push inseriamo questo nuovo oggetto all'ultima posizione dell'array CARS */

console.log(cars) /* Verifichiamo che l'oggetto sia stato inserito */

cars.forEach(car => {
  car.trims.pop();             /* Andiamo ad utilizzare un'altra arrow function, questa volta dando il comando di rimuovere (.pop) l'ultimo elemento dall'array TRIMS contenuto in ogni oggetto dell'array CARS */
});

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

console.log("Esercizio 7");

cars.forEach(car => {
  justTrims.push(car.trims[0]);   /* Ci avvaliamo di nuovo dell'arrow function per iterare l'array CARS, cerchiamo ovviamente l'indice 0 che ci indica l'oggetto in prima posizione e andiamo a "pusharlo" nel nuovo array justTrims */
});

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("Esercizio 8");

cars.forEach(car => {
  if (car.color[0] === 'b') {
    console.log('Fizz')       /* Stessa cosa di sopra, mi avvalgo della arrow function per iterare l'array CARS e gli dico che se ogni indice 0 della proprietà COLOR di ogni oggetto(car) è uguale alla stringa 'b', allora deve stampare Fizz, altrimenti Buzz*/
  } else {
    console.log('Buzz')
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("Esercizio 9");

let i = 0; 

while (numericArray[i] !== 66) {
  console.log(numericArray[i]);              /* Molto semplicemente andiamo a stabilire la condizione di I, cioè l'indice, a 0, quindi cominciamo dall'inizio. Dopo di che, con un ciclo while andiamo a settare la regola importantissima (altrimenti avremmo un loop) che stabilisce all'indice che all'incontro del valore 66 il ciclo si ferma e non continua più.(dicendogli che fin quando il valore dell'indice è diverso da 66 deve stampare ogni valore che incontra).  */
  i++; 
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

console.log("Esercizio 10");

let posizioneCharactersArray = [];

charactersArray.forEach(char => {
  switch (char){
    case 'a': posizioneCharactersArray.push(1); break;
    case 'b': posizioneCharactersArray.push(2); break;
    case 'c': posizioneCharactersArray.push(3); break;
    case 'd': posizioneCharactersArray.push(4); break;
    case 'e': posizioneCharactersArray.push(5); break;
    case 'f': posizioneCharactersArray.push(6); break;
    case 'g': posizioneCharactersArray.push(7); break;
    case 'h': posizioneCharactersArray.push(8); break;
    case 'i': posizioneCharactersArray.push(9); break;
    case 'j': posizioneCharactersArray.push(10); break;
    case 'k': posizioneCharactersArray.push(11); break;
    case 'l': posizioneCharactersArray.push(12); break;
    case 'm': posizioneCharactersArray.push(13); break;               /*Cominciamo l'esercizio stabilendo prima un nuovo array per determinare la posizione di ogni lettera dell'array fornito, rispetto all'alfabeto italiano. Dopo di che ci avvaliamo nuovamente del ciclo forEach con un arrow function che determinerà un comando SWITCH. Se, analizzando ogni lettera contenuta all'interno dell'array originale, si incontra una determinata lettera, a quel valore sarà associato un numero che indicherà la posizione rispetto all'alfabeto italiano nel nuovo array posizioneCharacters con un semplice comando PUSH, diversamente se avessimo incontrato un comando speciale o uno spazio, lo switch ci avrebbe dato un console.log di errore.*/
    case 'n': posizioneCharactersArray.push(14); break;               /* ps: non stabilisco nessuna regola sulle maiuscole o minuscole perchè l'array fornito presenta solo minuscole, però nel caso di maiuscole avrei dovuto trasformare tutti i char dell'array iniziale in minuscolo, così:  switch (char.toLowerCase()).*/
    case 'o': posizioneCharactersArray.push(15); break;
    case 'p': posizioneCharactersArray.push(16); break;
    case 'q': posizioneCharactersArray.push(17); break;
    case 'r': posizioneCharactersArray.push(18); break;
    case 's': posizioneCharactersArray.push(19); break;
    case 't': posizioneCharactersArray.push(20); break;
    case 'u': posizioneCharactersArray.push(21); break;
    case 'v': posizioneCharactersArray.push(22); break;
    case 'w': posizioneCharactersArray.push(23); break;
    case 'x': posizioneCharactersArray.push(24); break;
    case 'y': posizioneCharactersArray.push(25); break;
    case 'z': posizioneCharactersArray.push(26); break;
    default: console.log(`Questa lettera non è presente nell'alfabeto!`);
  }
});

console.log(posizioneCharactersArray)






