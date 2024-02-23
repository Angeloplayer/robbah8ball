// Robball
// Utente e saluto

let username = document.getElementById("username");
let saluto = document.getElementById("saluto");
username.addEventListener("input", function () {
  if (username.value !== "") {
    saluto.innerHTML = `Ciao ${username.value}!`;
  } else {
    saluto.innerHTML = `Ciao stronzo!`;
  }
});

// Domanda e risposta
let userQuestion = document.getElementById("domanda");
userQuestion.addEventListener("keydown", function () {
  if (event.key == "Enter") {
    let risposta = document.getElementById("risposta");
    // Numero casuale per la domanda equivalente al numero di risposte + 1 escluso il default
    let randomNumber = Math.floor(Math.random() * 62);

    // Funzionamento palla
    switch (randomNumber) {
      case 1:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Chiedilo a quel cazzone di Peppe`;
        break;
      case 2:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Tu si, Gianni no`;
        break;
      case 3:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Sicuramente Ferdi saprà aiutarti`;
        break;
      case 4:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Se ad Axsu chiederai non te ne pentirai`;
        break;
      case 5:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Si Djocan<br><img src="https://tse3.mm.bing.net/th?id=OIP.1FRdkc-l4oEeqIEcQ2Cx9AHaEK&pid=Api&P=0&h=180">`;
        break;
      case 6:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: No cazzo`;
        break;
      case 7:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Forse, nel dubbio fatti i cazzi tuoi`;
        break;
      case 8:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Non lo so, suca`;
        break;
      case 9:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: PEFFOOOOOOOORZA <br><audio autoplay><source src="media/peffo.mp3"></source></audio>`;
        break;
      case 10:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Boh nel dubbio kys`;
        break;
      case 11:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ma io che cazzo ne so scusi?`;
        break;
      case 12:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Stanne certo quanto è vero che a Carlo e Gianni piacciono le bambine`;
        break;
      case 13:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ancora a farmi domande? Vai su LOL porco Dio`;
        break;
      case 14:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Potrebbe essere, lo scoprirai a meno che tu non esploda prima`;
        break;
      case 15:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Quando gli asini voleranno`;
        break;
      case 16:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ma io che cazzo ne so, portami una birra <br>-Brixie`;
        break;
      case 17:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ti sembro onnisciente? Einstein? Akinator? Fottiti`;
        break;
      case 18:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Che domanda del cazzo, potevi risparmiartela`;
        break;
      case 19:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Nda chella zombatrombapisciapert e mammt ma c sfaccim n sacc`;
        break;
      case 20:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Mammt a pecr direbbe di si`;
        break;
      case 21:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Non lo so, io al massimo te posso cantare na canzone`;
        break;
      case 22:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Solo se i testimoni di Geova smetteranno di suonare i campanelli di casa`;
        break;
      case 23:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Dipende, faresti mai un patto con Luca?`;
        break;
      case 24:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Le tue probabilità sono alte quanto le probabilità che Brixie abbia il fumo addosso`;
        break;
      case 25:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Probabile quanto il successo di Gianni con le donne`;
        break;
      case 26:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Certo, se finisce male però non mi prendo responsabilità`;
        break;
      case 27:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Possibile quanto l'esistenza di Dio`;
        break;
      case 28:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Palese quanto il pulllman che arriva appena accendi una sigaretta`;
        break;
      case 29:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Tenta, al massimo finisci per essere inculato`;
        break;
      case 30:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Risponditi da solo, a prescindere il risultato sarà meno divertente rispetto alla nascità di Peppe`;
        break;
      case 31:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Perhè me lo chiedi? <br>Cosa ti passa per la mente maniaco?`;
        break;
      case 32:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Questa domanda sa di pedofilo`;
        break;
      case 33:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Qualunque pensi sia la risposta giusta, sappi che di certo invadere la polonia non è la soluzione`;
        break;
      case 34:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Mi poni questa domanda solo perchè pensi di sapere di non sapere, Socrate Fake dei miei stivali`;
        break;
      case 35:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Prova con questo <a href="https://youtu.be/xvFZjo5PgG0?si=LCptTZDfQkTDhDUz">video</a>`;
        break;
      case 36:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Sicuramente renderà le cose più interessanti con un sextoy`;
        break;
      case 37:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Rischia, al massimo schioppi`;
        break;
      case 38:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ma che cazzo te ne frega`;
        break;
      case 39:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Dai priorità a cse più importanti, e no, non il rankare su lol`;
        break;
      case 40:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Aspetta e spera`;
        break;
      case 41:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Prima le priorità, poi le probabilità`;
        break;
      case 42:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Resterà un dubbio, MUHAHAHHAHA`;
        break;
      case 43:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Fai una lista dei perchè di questa domanda e poi torna a farmi sto quesito del cazzo`;
        break;
      case 44:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Stai soft, senza pensier`;
        break;
      case 45:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Qualunque cosa ma non imitare o seguire le orme di Gianni`;
        break;
      case 46:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Si, solo se però tiri un ceffone a Ferdi`;
        break;
      case 47:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Adattati, hai sopportato gli audio di Ferdi, sopporterai anche questa delusione`;
        break;
      case 48:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Dipende, se una ranked su lol è peggio allora ne vale la pena`;
        break;
      case 49:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: EH VORRESTI, TI PIACEREBBE!<br><img src="https://tse2.mm.bing.net/th?id=OIP.jnuGBvyP-itsycAQBFE_ZAAAAA&pid=Api&P=0&h=180">`;
        break;
      case 50:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Girati e guarda la vastità del cazzo che me ne frega di questa domanda`;
        break;
      case 51:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ti prego si, FALLO!`;
        break;
      case 52:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Ma sei pazzo? Ma anche no`;
        break;
      case 53:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Il duce approverebbe<br><img src="https://tse4.mm.bing.net/th?id=OIP.jy-JsT-Yr4uRsPMitaovMQHaED&pid=Api&P=0&h=180">`;
        break;
      case 54:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Non c'è niente che tu possa fare<br><img src="media/napoleon.jpg"><audio autoplay><source src="media/napoleon-meme.mp3"></source></audio>`;
        break;
      case 55:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Agisci come se domani fosse l'ultimo giorno, senza rimpianti`;
        break;
      case 56:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Quanto è vero che Carlo molesta minorenni`;
        break;
      case 57:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: ...<br> MA SEI SERIO???`;
        break;
      case 58:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Sei ancora troppo giovane per queste cose`;
        break;
      case 59:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Punta sempre in alto, alle stelle, se non puoi invece punta ai negri`;
        break;
      case 60:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Con luca sicuramente sarà più rischioso`;
        break;
      // case 61:
      //   risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: `;
      //   break;
      default:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>Robball: Mannaggia a Gianni`;
    }
    console.log(risposta.innerHTML);
  }
});
