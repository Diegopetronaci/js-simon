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

for (var i = 0; i < 5; i++) {
    var numeroCasuale = getRandomNumber(1, 100);
    numeriCasuali.push(numeroCasuale);
}
console.log(numeriCasuali);


//Dopo 30 secondi l’utente deve inserire, un prompt alla volta

$("button").click(function() {

    

    /* setTimeout(function () {

        $("").azione("");

    }, 3000); */
    
     
    setTimeout(function () {
        alert(numeriCasuali)
    }, 5000);
    
    
});

/* var rispostaUtente = Number(prompt("inserisci il numero")); */