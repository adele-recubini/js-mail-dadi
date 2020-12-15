// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


output = document.getElementById('mail-list');
// genero la domanda all'utente e le possibili risposte
var domandaMail = prompt('qual\ è la tua mail?');
var mail = ['adele.r87@gmail.com' , 'anonimo@gmail.com' , 'carlo@gmail.com'];


// creo la var array con la lista delle mail

var array = ['adele.r87@gmail.com' , 'anonimo@gmail.com' , 'carlo@gmail.com'];

for(var i = 0; i < array.lenght; i++) {
  if( mail  === array[i] {
    output.append('ora puoi giocare');
  } else {
    alert('error')
  }
  }

// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
//
// var myShot = Math.floor(Math.random() * 5) +1;
// var pcShot = Math.floor(Math.random() * 5) +1;
