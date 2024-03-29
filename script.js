// Robball
// Utente, saluto, domanda  e risposta.

let username = document.getElementById("username");
let saluto = document.getElementById("saluto");
let userQuestion = document.getElementById("domanda");
let risposta = document.getElementById("risposta");

//Funzionamento nickname
username.addEventListener("input", function () {
  if (username.value !== "") {
    saluto.innerText = `Ciao ${username.value}!`;
  } else {
    saluto.innerText = `Ciao strunz!`;
  }
});

// Funzionamento domanda e risposta
if (username.value === "") {
  username.value = "Strunz";
}
userQuestion.addEventListener("keydown", function () {
  if (event.key == "Enter") {
    let domanda =
      username.value + ": " + userQuestion.value + "? <br>Robball: ";

    // Numero casuale per la risposta equivalente al numero di risposte + default
    let randomNumber = Math.floor(Math.random() * 62);

    // Per i test
    // randomNumber = 60;

    // Risposte
    switch (randomNumber) {
      case 1:
        risposta.innerHTML = `${domanda} Chiedilo a quel cazzone di Peppe`;
        break;
      case 2:
        risposta.innerHTML = `${domanda} Tu si, Gianni no`;
        break;
      case 3:
        risposta.innerHTML = `${domanda} Sicuramente Ferdi saprà aiutarti`;
        break;
      case 4:
        risposta.innerHTML = `${domanda} Se ad Axsu chiederai non te ne pentirai`;
        break;
      case 5:
        risposta.innerHTML = `${domanda} Si Djocan<br><img src="https://tse3.mm.bing.net/th?id=OIP.1FRdkc-l4oEeqIEcQ2Cx9AHaEK&pid=Api&P=0&h=180">`;
        break;
      case 6:
        risposta.innerHTML = `${domanda} No cazzo`;
        break;
      case 7:
        risposta.innerHTML = `${domanda} Forse, nel dubbio fatti i cazzi tuoi`;
        break;
      case 8:
        risposta.innerHTML = `${domanda} Non lo so, suca`;
        break;
      case 9:
        risposta.innerHTML = `${domanda} PEFFOOOOOOOORZA <br><audio autoplay><source src="media/peffo.mp3"></source></audio>`;
        break;
      case 10:
        risposta.innerHTML = `${domanda} Boh nel dubbio kys`;
        break;
      case 11:
        risposta.innerHTML = `${domanda} Ma io che cazzo ne so scusi?`;
        break;
      case 12:
        risposta.innerHTML = `${domanda} Stanne certo quanto è vero che a Carlo e Gianni piacciono le bambine`;
        break;
      case 13:
        risposta.innerHTML = `${domanda} Ancora a farmi domande? Vai su LOL porco Dio`;
        break;
      case 14:
        risposta.innerHTML = `${domanda} Potrebbe essere, lo scoprirai a meno che tu non esploda prima`;
        break;
      case 15:
        risposta.innerHTML = `${domanda} Quando gli asini voleranno`;
        break;
      case 16:
        risposta.innerHTML = `${domanda} Ma io che cazzo ne so, portami una birra <br>-Brixie`;
        break;
      case 17:
        risposta.innerHTML = `${domanda} Ti sembro onnisciente? Einstein? Akinator? Fottiti`;
        break;
      case 18:
        risposta.innerHTML = `${domanda} Che domanda del cazzo, potevi risparmiartela`;
        break;
      case 19:
        risposta.innerHTML = `${domanda} Nda chella zombatrombapisciapert e mammt ma c sfaccim n sacc`;
        break;
      case 20:
        risposta.innerHTML = `${domanda} Mammt a pecr direbbe di si`;
        break;
      case 21:
        risposta.innerHTML = `${domanda} Non lo so, io al massimo te posso cantare na canzone`;
        break;
      case 22:
        risposta.innerHTML = `${domanda} Solo se i testimoni di Geova smetteranno di suonare i campanelli di casa`;
        break;
      case 23:
        risposta.innerHTML = `${domanda} Dipende, faresti mai un patto con Luca?<br><video autoplay loop><source src="media/lucalastor.mp4"></video>`;
        break;
      case 24:
        risposta.innerHTML = `${domanda} Le tue probabilità sono alte quanto le probabilità che Brixie abbia il fumo addosso`;
        break;
      case 25:
        risposta.innerHTML = `${domanda} Probabile quanto il successo di Gianni con le donne`;
        break;
      case 26:
        risposta.innerHTML = `${domanda} Certo, se finisce male però non mi prendo responsabilità`;
        break;
      case 27:
        risposta.innerHTML = `${domanda} Possibile quanto l'esistenza di Dio`;
        break;
      case 28:
        risposta.innerHTML = `${domanda} Palese quanto il pulllman che arriva appena accendi una sigaretta`;
        break;
      case 29:
        risposta.innerHTML = `${domanda} Tenta, al massimo finisci per essere inculato`;
        break;
      case 30:
        risposta.innerHTML = `${domanda} Risponditi da solo, a prescindere il risultato sarà meno divertente rispetto alla nascità di Peppe`;
        break;
      case 31:
        risposta.innerHTML = `${domanda} Perhè me lo chiedi? <br>Cosa ti passa per la mente maniaco?`;
        break;
      case 32:
        risposta.innerHTML = `${domanda} Questa domanda sa di pedofilo`;
        break;
      case 33:
        risposta.innerHTML = `${domanda} Qualunque pensi sia la risposta giusta, sappi che di certo invadere la polonia non è la soluzione`;
        break;
      case 34:
        risposta.innerHTML = `${domanda} Mi poni questa domanda solo perchè pensi di sapere di non sapere, Socrate Fake dei miei stivali`;
        break;
      case 35:
        risposta.innerHTML = `${domanda} Prova con questo <a href="https://youtu.be/xvFZjo5PgG0?si=LCptTZDfQkTDhDUz">video</a>`;
        break;
      case 36:
        risposta.innerHTML = `${domanda} Sicuramente renderà le cose più interessanti con un sextoy`;
        break;
      case 37:
        risposta.innerHTML = `${domanda} Rischia, al massimo schioppi`;
        break;
      case 38:
        risposta.innerHTML = `${domanda} Ma che cazzo te ne frega`;
        break;
      case 39:
        risposta.innerHTML = `${domanda} Dai priorità a cse più importanti, e no, non il rankare su lol`;
        break;
      case 40:
        risposta.innerHTML = `${domanda} Aspetta e spera`;
        break;
      case 41:
        risposta.innerHTML = `${domanda} Prima le priorità, poi le probabilità`;
        break;
      case 42:
        risposta.innerHTML = `${domanda} Resterà un dubbio, MUHAHAHHAHA`;
        break;
      case 43:
        risposta.innerHTML = `${domanda} Fai una lista dei perchè di questa domanda e poi torna a farmi sto quesito del cazzo`;
        break;
      case 44:
        risposta.innerHTML = `${domanda} Stai soft, senza pensier`;
        break;
      case 45:
        risposta.innerHTML = `${domanda} Qualunque cosa ma non imitare o seguire le orme di Gianni`;
        break;
      case 46:
        risposta.innerHTML = `${domanda} Si, solo se però tiri un ceffone a Ferdi`;
        break;
      case 47:
        risposta.innerHTML = `${domanda} Adattati, hai sopportato gli audio di Ferdi, sopporterai anche questa delusione`;
        break;
      case 48:
        risposta.innerHTML = `${domanda} Dipende, se una ranked su lol è peggio allora ne vale la pena`;
        break;
      case 49:
        risposta.innerHTML = `${domanda} EH VORRESTI, TI PIACEREBBE!<br><img src="https://tse2.mm.bing.net/th?id=OIP.jnuGBvyP-itsycAQBFE_ZAAAAA&pid=Api&P=0&h=180">`;
        break;
      case 50:
        risposta.innerHTML = `${domanda} Girati e guarda la vastità del cazzo che me ne frega di questa domanda`;
        break;
      case 51:
        risposta.innerHTML = `${domanda} Ti prego si, FALLO!`;
        break;
      case 52:
        risposta.innerHTML = `${domanda} Ma sei pazzo? Ma anche no`;
        break;
      case 53:
        risposta.innerHTML = `${domanda} Il duce approverebbe<br><img src="https://tse4.mm.bing.net/th?id=OIP.jy-JsT-Yr4uRsPMitaovMQHaED&pid=Api&P=0&h=180">`;
        break;
      case 54:
        risposta.innerHTML = `${domanda} Non c'è niente che tu possa fare<br><img src="media/napoleon.jpg"><audio autoplay><source src="media/napoleon-meme.mp3"></source></audio>`;
        break;
      case 55:
        risposta.innerHTML = `${domanda} Agisci come se domani fosse l'ultimo giorno, senza rimpianti`;
        break;
      case 56:
        risposta.innerHTML = `${domanda} Quanto è vero che Carlo molesta minorenni`;
        break;
      case 57:
        risposta.innerHTML = `${domanda} ...<br> MA SEI SERIO???`;
        break;
      case 58:
        risposta.innerHTML = `${domanda} Sei ancora troppo giovane per queste cose`;
        break;
      case 59:
        risposta.innerHTML = `${domanda} Punta sempre in alto, alle stelle, se non puoi invece punta ai negri`;
        break;
      case 60:
        risposta.innerHTML = `${domanda} Con Luca sicuramente sarà più rischioso<br><video autoplay loop><source src="media/lucauto.mp4"></video>`;
        break;
      // case 61:
      //   risposta.innerHTML = `${domanda} `;
      //   break;
      default:
        risposta.innerHTML = `${domanda} Mannaggia a Gianni`;
    }
    console.log(risposta.innerHTML);
  }
});
