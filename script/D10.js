/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;
console.log(`somma vale ${sum}`);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log(`il numero casuale e' ${random}`);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "lorenzo",
  surname: "baldassari",
  age: 20,
};
console.log("l'oggetto e' ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log("l'oggetto e' ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "css", "javascript"];
console.log("l'oggetto e' ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("python");
console.log("l'oggetto e' ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("l'oggetto e' ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  let a = Math.floor(Math.random() * 6) + 1;
  return a;
};
console.log(`il numero causale e'`, dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return console.log(`il maggiore e' `, n1);
  } else if (n2 > n1) {
    return console.log(`il maggiore e' `, n2);
  } else {
    return console.log(`i due numeri sono uguali`);
  }
};
whoIsBigger(5, 5);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => {
  const a = str.split(" ");
  return a;
};
console.log(splitMe(`ciao mi chiamo lorenzo`));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (str, b1) => {
  if (b1 === true) {
    return str.slice(1);
  } else if (b1 === false) {
    return str.slice(0, -1);
  } else {
    return `parametri non specificati correttamente `;
  }
};
console.log(deleteOne(`la mia gattina si chiama ghighini`, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyletters = (str) => {
  const a = str.replace(/[0-9]/g, " ");
  return a;
};
console.log(onlyletters(`ho 2 cani e 5 mucche`));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) => {
  const b = str.includes(`@`);
  return b;
};
console.log(isThisAnEmail(`lorebald)a@gmail.com`));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const a = new Date();
  const day = [
    `domenica`,
    `lunedi`,
    `martedi`,
    `mercoledi`,
    `giovedi`,
    `venerdi`,
    `sabato`,
  ];
  b = a.getDay();
  console.log(b);
  c = day[b];

  return console.log(`oggi e' ${c}`);
};
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (nummberOfRolls) => {
  const arayOfResults = [];
  let sum = 0;
  const obj = {};
  for (i = 0; i < nummberOfRolls; i++) {
    singleRolls = dice();
    arayOfResults.push(singleRolls);
    sum += singleRolls;
  }
  obj.sum = sum;
  obj.values = arayOfResults;
  return obj;
};
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date1) => {
  const selectedDate = new Date(date1).getTime();
  // console.log(selectedDate);
  const today = new Date().getTime();
  // console.log(today);
  const dayPassed = (today - selectedDate) / 86400000;
  return console.log(`sono passati ${dayPassed} giorni`);
};
howManyDays(`september 12, 2023 00:00:00`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const a = new Date();
  const b = a.getMonth();
  const c = a.getDate();
  // console.log(b, c);
  if (b === 0 && c === 20) {
    return true;
  } else {
    return false;
  }
};
console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  delete obj[str];
};
deleteProp(movies[1], `Type`);
console.log(movies);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  array1 = [];
  for (i = 0; i < movies.length; i++) {
    array1.push(parseInt(movies[i].Year));
  }
  let b = Math.max.apply(Math, array1);
  // console.log(b);
  for (i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) === b)
      return console.log("il titolo del film piu' recente e'", movies[i]);
  }
};
newestMovie();

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => {
  return console.log(
    `il numero di film contenuti nell'array e' ${movies.length}`
  );
};
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  array1 = [];
  for (i = 0; i < movies.length; i++) {
    array1.push(movies[i].Year);
  }
  return console.log(array1);
};
onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const newestMovie2 = () => {
  array1 = [];
  for (i = 0; i < movies.length; i++) {
    array1.push(parseInt(movies[i].Year));
  }
  const film2000 = [];
  for (i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 1999) {
      film2000.push(movies[i]);
    }
  }
  console.log(film2000);
};
newestMovie2();

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  let sum = 0;
  for (i = 0; i < movies.length; i++) {
    sum = sum + parseInt(movies[i].Year);
  }
  return console.log(`la somma degli anni di tutti i film e' ${sum}`);
};
sumAllTheYears();

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title === str) {
      return console.log("il film selezionato e'", movies[i]);
    }
  }
};

searchByTitle("Avengers: Infinity War");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// const searchAndDivide = (str) => {
//   const array1 = [];
//   for (i = 0; i < movies.length; i++)
//     if (movies[i].Title.indexOf(str) >= 0) {
//       array1.push(movies[i]);
//     }
//   return console.log(array1);
// };
// searchAndDivide(`avengers`);
const searchAndDivide = (str) => {
  const match = [];
  const unmatch = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(str) >= 0) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  const obj = {
    match: match,
    unmacth: unmatch,
  };
  console.log(obj);
};
searchAndDivide(`Lord`);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(movies);
const removeIndex = (n) => {
  const a = movies.slice(0, n - 1);
  const b = movies.slice(n);

  return console.log(a.concat(b));
};
removeIndex(6); //non era chiaro se dovevo rimuovere la posizione secondo l'array 3=2 o secondo un unmano quindi 3=3, ho utilizzato la posizione array ma si puo modificare facendo n e poi n+1

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const cont = document.getElementById(`container`);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const allTds = document.getElementsByTagName(`td`);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

for (i = 0; i < allTds.length; i++) {
  console.log(allTds[i].innerText);
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const allLinks = document.getElementsByTagName(`a`);
console.log(allLinks);
const arrayLinks = Array.from(allLinks);
console.log(arrayLinks);
for (i = 0; i < arrayLinks.length; i++) {
  arrayLinks[i].style.backgroundColor = `red`;
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const myList = document.getElementById(`myList`);
const newElement = document.createElement(`li`);
newElement.innerText = `Starfield`;
myList.appendChild(newElement);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

myList.innerHTML = "";

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const allTr = document.getElementsByTagName(`tr`);
const trArray = Array.from(allTr);
for (i = 0; i < trArray.length; i++) {
  trArray[i].classList.add(`test`);
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (n1) => {
  let str = "";
  for (i = 0; i < n1 + 1; i++) {
    for (j = 0; j < i; j++) {
      str += `*`;
    }
    str += "\n";
  }
  console.log(str);
};

halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
let str1 = ` *`;

const Tree = (n1) => {
  for (i = 0; i < n1 + 1; i++) {
    for (j = 0; j < i; j++) {
      str1 += `*`.repeat(3);
    }
    str1 += "\n";
  }
  console.log(str1);
};

Tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
// const primeNumber = (n) => {
//   if (
//     (n === 1 && n === 2 && n === 3 && n % (6 * n + 1) === 0) ||
//     n % (6 * n - 1) === 0
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// primeNumber(7);
