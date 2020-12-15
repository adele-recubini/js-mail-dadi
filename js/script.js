// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


output = document.getElementById('mail-list');
// genero la domanda all'utente
var domandaMail = prompt('qual\ è la tua mail?');

// creo la var array con la lista delle mail

var array = ['adele.r87@gmail.com' , 'anonimo@gmail.com' , 'carlo@gmail.com'];

for(var i = 0; i < array.length; i++) {
  if( domandaMail === array[i] ){
    output.append('ora puoi giocare');
  } else {
  if( domandaMail !== array[i] ){
  alert('effettua la registrazione');
  }
  }
  }


//
// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var min = 1;
var max = 6;

var playerPc = prompt( Math.floor(Math.random() * (max + 1 - min) + min));
var player = prompt( Math.floor(Math.random() * (max + 1 - min) + min));

if( playerPc > player) {
  output.append('hai vinto');
} else {
if (playerPc < player) {
  output.append('hai perso');
  }
}
