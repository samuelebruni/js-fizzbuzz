/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */

//faccio stampare i numeri da 1 a 100 sulla console
for (let numbers = 1; numbers <= 100; numbers++){

    let fizz = numbers % 3 == 0;
    let buzz = numbers % 5 == 0;
    let numberItems = document.getElementById("numbers-items");

    if (fizz && buzz){
        console.log("FizzBuzz");
        numberItems.innerHTML += `<li id=${numbers}>FizzBuzz</li>`;
        document.getElementById(numbers).classList.add("text-danger", "p-3", "bg-success", "list-unstyled", "text-black", "display-3", "w-25","text-center","border","border-dark");

    } else if (buzz){
        console.log("Buzz");
        numberItems.innerHTML += `<li id=${numbers}>Buzz</li>`;
        document.getElementById(numbers).classList.add("text-danger", "p-3", "bg-warning", "list-unstyled", "text-black", "display-3", "w-25","text-center","border","border-dark");

    } else if (fizz){
        console.log("Fizz");
        numberItems.innerHTML += `<li id=${numbers}>Fizz</li>`;
        document.getElementById(numbers).classList.add("text-danger", "p-3", "bg-info", "list-unstyled", "text-black", "display-3", "w-25","text-center","border","border-dark");

    } else {
        console.log(numbers);
        numberItems.innerHTML += `<li id=${numbers}>${numbers}</li>`;
        document.getElementById(numbers).classList.add("text-danger", "p-3", "bg-danger", "list-unstyled", "text-black", "display-3", "w-25","text-center","border","border-dark");

    }


}
