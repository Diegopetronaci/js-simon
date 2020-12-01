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

$("button").click(function () {
    for (var i = 0; i < 5; i++) {
        var numeroCasuale = getRandomNumber(1, 100);
        numeriCasuali.push(numeroCasuale);
    }
    console.log(numeriCasuali);
});

//Dopo 30 secondi l’utente deve inserire, un prompt alla volta
//un prompt alla volta, i numeri che ha visto precedentemente.
//il software dice quanti e quali numeri sono stati ricordati.


$("button").click(function() {

    alert(numeriCasuali);

    
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                var rispostaUtente = Number(prompt("inserisci uno dei Numeri"));
                risposteUtente.push(rispostaUtente);
            };
            console.log(risposteUtente);

            for (var i = 0; i < 5; i++) {
                if (numeriCasuali.includes(risposteUtente[i])) {
                    numeriRicordati.push(risposteUtente[i]);
                }
            };
            console.log(numeriRicordati);
            $(".punteggio").text("il tuo punteggio è di " + numeriRicordati.length + " ed i numeri ricordati sono: " + numeriRicordati)
        }, 30000);    
});
