console.log("HELLO WORLD!!!!!!!!!!!!!!!!!")
console.log("Se compare questo messaggio nella console del browser allora l'import dello script ha funzionato!")

// *********************** VARIABILI *******************************
let persona = "Aldo" //Ho appena creato una variabile di nome 'persona', e inoltre ho assegnato (tramite l'operatore di assegnazione '=') ad essa il valore "Aldo"
// let persona // Rispetto a sopra qua sto dichiarando la variabile ma non le sto dando un valore (sarà quindi undefined)
// Le variabili sono quindi dei contenitori dedicati a conservare dei valori che poi utilizzerò nel resto del programma
// Quindi per poter utilizzare una variabile prima di tutto devo dichiararla
// Per dare dei nomi alle variabili posso utilizzare più o meno tutto tranne qualche eccezione (non possono iniziare con dei numeri) e tranne keywords (var,let,function,....). Solitamente si utilizza la cosiddetta nomenclatura camelCase (prima lettera minuscola le altre parole con la maiuscola) es. myBeautifulDog
console.log("Il valore della variabile persona è: " + persona) // Il '+' messo tra 2 stringhe le concatena in una unica
console.log("Il valore della variabile persona è:", persona) // Questi 2 console.log sono molto utili ad esempio per controllare il VALORE DI UNA VARIABILE
persona = "Giovanni" // Qua sto RIASSEGNANDO (sovrascrivendo) un valore alla variabile 'persona'
console.log("Il valore della variabile persona è:", persona)
persona = 20
console.log("Il valore della variabile persona è:", persona)
persona = true
console.log("Il valore della variabile persona è:", persona)

// ************************************** TIPI PRIMITIVI ***************************
// Ovvero quali tipi di dato base posso inserire all'interno di variabili?
// 1. STRINGHE ovvero testo delimitato da apici singoli o doppi (MEGLIO I DOPPI)
let user = "Giacomo"
// 2. NUMERI, interi o decimali
let myNumber = 20
let myDecimalNumber = 20.5
console.log("Ecco il risultato della somma: ", myNumber + myDecimalNumber)
console.log("Ecco il prodotto:", myDecimalNumber * myNumber)
console.log("Ecco la sottrazione:", myDecimalNumber - myNumber)
console.log("Ecco la divisione:", myDecimalNumber / myNumber)
// 3. BOOLEANI, solo due possibili valori: true/false
let canYouDrive = true
let doYouHaveACat = false
// window.alert("Ecco il risultato della somma: " + (myNumber + myDecimalNumber))
// Se utilizzo '+' con le stringhe otterremo una CONCATENAZIONE
console.log("Nome utente: " + user + ", anni utente: " + myNumber + ", ha un gatto? " + doYouHaveACat)

// ************************************** LET VS CONST *********************************
const myName = "Riccardo"
// myName = "Ajeje" // ERRORE! Il codice qua si rompe perché stiamo cercando di assegnare nuovamente un valore a qualcosa che invece è stato dichiarato come COSTANTE! è praticamente una scatola chiusa col nastro adesivo, sigillata!
// Quindi è BUONA NORMA usare CONST un po' dappertutto per prevenire eventuali sovrascritture fatte per errore. Nella gran maggioranza dei casi ci troveremo a definire un valore all'inizio per poi non modificarlo più quindi è più probabile che utilizzeremo const più spesso che let. Se ci trovassimo in una situazione in cui invece effettivamente il valore deve cambiare per qualche ragione allora in tal caso utilizzeremo LET
console.log("Il mio nome è: ", myName)

const stringa1 = "Ciao "
const stringa2 = "A Tutti"
console.log(stringa1 + stringa2) // -> Concatena 2 stringhe
console.log(stringa1 - stringa2) // -> NaN (Not A Number)
console.log(stringa1 * stringa2) // -> NaN (Not A Number)
console.log(stringa1 / stringa2) // -> NaN (Not A Number)

// ***************************************** NULL E UNDEFINED ******************************
let nonDefinita
console.log("Il valore della variabile non definita è:", nonDefinita) // UNDEFINED è una variabile o non definita o alla quale non è stato assegnato valore
let niente = null
console.log("Il valore della variabile niente è:", niente) // NULL invece è una maniera volontaria di ANNULLARE il contenuto di una variabile
niente = "Qualcosa"
console.log("Il valore della variabile niente è:", niente)
