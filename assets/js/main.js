//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire,
//un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, 
//il software dice quanti e quali numeri sono stati ricordati.


//Un alert espone 5 numeri casuali diversi.


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeriCasuali = [];
var risposteUtente = [];
var numeriRicordati = [];


for (var i = 0; i < 5; i++) {
    var numeroCasuale = getRandomNumber(1, 100);
    numeriCasuali.push(numeroCasuale);
}
console.log(numeriCasuali);


//Dopo 30 secondi l’utente deve inserire, un prompt alla volta
//un prompt alla volta, i numeri che ha visto precedentemente.


$("button").click(function() {

    alert(numeriCasuali);

    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            var rispostaUtente = Number(prompt("inserisci uno dei Numeri"));
            risposteUtente.push(rispostaUtente);
            console.log(risposteUtente);
        }, 1000);

    };

    //il software dice quanti e quali numeri sono stati ricordati.
     
    for (var i = 0; i < 5; i++) {
        if (risposteUtente[i] === numericasuali[i]) {
            numeriRicordati.push(risposteUtente[i]);
        };
    };
    
});

console.log(numeriRicordati);