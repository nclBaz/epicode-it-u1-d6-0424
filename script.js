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

// **************************************** ASSEGNAZIONE ***************************************
let numero = 3
let numero2 = 9
console.log("Il valore della variabile numero è:", numero)
console.log("Il valore della variabile numero2 è:", numero2)
numero = numero2 // Il valore di numero2 andrà ad esser inserito in numero
console.log("Il valore della variabile numero è:", numero)
console.log("Il valore della variabile numero2 è:", numero2)

numero += numero2 // Scorciatoia: equivale a numero = numero + numero2
console.log("Il valore della variabile numero è:", numero) // 9 + 9 = 18
numero -= numero2 // equivale a numero = numero - numero2 cioè 18 - 9
console.log("Il valore della variabile numero è:", numero)
numero *= numero
console.log("Il valore della variabile numero è:", numero)

// *************************************** OPERATORI DI COMPARAZIONE *****************************
// Gli operatori di comparazione restituiscono sempre RISULTATI BOOLEANI (TRUE/FALSE)
const num1 = 5
const num2 = 10
const num3 = 20

console.log("Num1 è uguale a num2?", num1 === num2) // = = = (TRIPLE EQUALITY)
console.log("Num1 è più piccolo di num2?", num1 < num2)
console.log("Num1 è più grande di num2?", num1 > num2)
console.log("Num1 è più piccolo o uguale a num2?", num1 <= num2) // < =
console.log("Num1 è più piccolo o uguale a num2?", num1 >= num2) // > =

console.log("Il dato contenuto all'interno di num1 è numerico?", typeof num1 === "number") // typeof è un operatore speciale che ci consente di capire il tipo di dato contenuto all'interno di una variabile

// *************************************** OPERATORI LOGICI *****************************
// Gli operatori logici restituiscono sempre RISULTATI BOOLEANI (TRUE/FALSE)
// Ci consento  di valutare più espressioni booleane in contemporanea oppure magari negarne una
// && <- AND, se TUTTE le condizioni sono VERE allora ci darà VERO
// || <- OR, se ALMENO UNA delle condizioni è VERA allora ci darà VERO
// ! <- NOT, INVERTE il valore booleano di una condizione
console.log(num1 < num2 && num2 < num3) // TRUE AND TRUE -> TRUE
console.log(num1 > num2 && num2 < num3) // FALSE AND TRUE --> FALSE
console.log(num1 > num2 || num2 < num3) // FALSE OR TRUE --> TRUE
console.log(num1 > num2 || num2 > num3) // FALSE OR FALSE --> FALSE

console.log(!(num1 === num2))
console.log(num1 !== num2) // OPERATORE DI DISUGUAGLIANZA ! = =
console.log(!(num1 < num2 && num2 < num3)) // NAND abbiamo negato l'and
console.log(!(num1 > num2 || num2 < num3)) // NOR abbiamo negato l'or

// ********************************** OPERATORE TERNARIO ********************************
// Da utilizzare quando dobbiamo assegnare un valore ad una variabile basandoci sulla valutazione di una o più condizioni
const myAge = 5
const canIDrive = myAge >= 18 ? "SI" : "NO"
console.log("Posso guidare? " + canIDrive)

const isTodayBlackFriday = false
const discount = isTodayBlackFriday ? "20%" : "0%"
console.log("Lo sconto previsto per oggi è: " + discount)
