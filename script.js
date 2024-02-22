// 8ball
// Utente e saluto

let username = document.getElementById("username");
let saluto = document.getElementById("saluto");
username.addEventListener("keydown", function () {
  if (event.key === "Enter" && username.value !== "") {
    saluto.innerHTML = `Ciao ${username.value}!`;
  } else {
    saluto.innerHTML = `Ciao stronzo!`;
  }
});

// Domanda e risposta
let userQuestion = document.getElementById("domanda");
userQuestion.addEventListener("keydown", function () {
  if (event.key === "Enter" && username.value !== "") {
    console.log(`${username.value}: ${userQuestion.value}`);
    let risposta = document.getElementById("risposta");
    // Numero casuale per la domanda equivalente al numero di risposte + 1 escluso il default
    let randomNumber = Math.floor(Math.random() * 62);

    // Funzionamento palla
    switch (randomNumber) {
      case 1:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Chiedilo a quel cazzone di Peppe`;
        break;
      case 2:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Tu si, Gianni no`;
        break;
      case 3:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Sicuramente Ferdi saprà aiutarti`;
        break;
      case 4:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Se ad Axsu chiederai non te ne pentirai`;
        break;
      case 5:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Si Djocan`;
        break;
      case 6:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: No cazzo`;
        break;
      case 7:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Forse, nel dubbio fatti i cazzi tuoi`;
        break;
      case 8:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Non lo so, suca`;
        break;
      case 9:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: PEFFOOOOOOOORZA <br><audio autoplay><source src="media/peffo.mp3"></source></audio>`;
        break;
      case 10:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Boh nel dubbio kys`;
        break;
      case 11:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ma io che cazzo ne so scusi?`;
        break;
      case 12:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Stanne certo quanto è vero che a Carlo e Gianni piacciono le bambine`;
        break;
      case 13:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ancora a farmi domande? Vai su LOL porco Dio`;
        break;
      case 14:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Potrebbe essere, lo scoprirai a meno che tu non esploda prima`;
        break;
      case 15:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Quando gli asini voleranno`;
        break;
      case 16:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ma io che cazzo ne so, portami una birra <br>-Brixie`;
        break;
      case 17:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ti sembro onnisciente? Einstein? Akinator? Fottiti`;
        break;
      case 18:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Che domanda del cazzo, potevi risparmiartela`;
        break;
      case 19:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Nda chella zombatrombapisciapert e mammt ma c sfaccim n sacc`;
        break;
      case 20:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Mammt a pecr direbbe di si`;
        break;
      case 21:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Non lo so, io al massimo te posso cantare na canzone`;
        break;
      case 22:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Solo se i testimoni di Geova smetteranno di suonare i campanelli di casa`;
        break;
      case 23:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Dipende, faresti mai un patto con Luca?`;
        break;
      case 24:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Le tue probabilità sono alte quanto le probabilità che Brixie abbia il fumo addosso`;
        break;
      case 25:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Probabile quanto il successo di Gianni con le donne`;
        break;
      case 26:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Certo, se finisce male però non mi prendo responsabilità`;
        break;
      case 27:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Possibile quanto l'esistenza di Dio`;
        break;
      case 28:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Palese quanto il pulllman che arriva appena accendi una sigaretta`;
        break;
      case 29:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Tenta, al massimo finisci per essere inculato`;
        break;
      case 30:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Risponditi da solo, a prescindere il risultato sarà meno divertente rispetto alla nascità di Peppe`;
        break;
      case 31:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Perhè me lo chiedi? <br>Cosa ti passa per la mente maniaco?`;
        break;
      case 32:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Questa domanda sa di pedofilo`;
        break;
      case 33:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Qualunque pensi sia la risposta giusta, sappi che di certo invadere la polonia non è la soluzione`;
        break;
      case 34:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Mi poni questa domanda solo perchè pensi di sapere di non sapere, Socrate Fake dei miei stivali`;
        break;
      case 35:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Prova con questo <a href="https://youtu.be/xvFZjo5PgG0?si=LCptTZDfQkTDhDUz">video</a>`;
        break;
      case 36:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Sicuramente renderà le cose più interessanti con un sextoy`;
        break;
      case 37:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Rischia, al massimo schioppi`;
        break;
      case 38:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ma che cazzo te ne frega`;
        break;
      case 39:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Dai priorità a cse più importanti, e no, non il rankare su lol`;
        break;
      case 40:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Aspetta e spera`;
        break;
      case 41:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Prima le priorità, poi le probabilità`;
        break;
      case 42:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Resterà un dubbio, MUHAHAHHAHA`;
        break;
      case 43:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Fai una lista dei perchè di questa domanda e poi torna a farmi sto quesito del cazzo`;
        break;
      case 44:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Stai soft, senza pensier`;
        break;
      case 45:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Qualunque cosa ma non imitare o seguire le orme di Gianni`;
        break;
      case 46:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Si, solo se però tiri un ceffone a Ferdi`;
        break;
      case 47:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Adattati, hai sopportato gli audio di Ferdi, sopporterai anche questa delusione`;
        break;
      case 48:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Dipende, se una ranked su lol è peggio allora ne vale la pena`;
        break;
      case 49:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: EH VORRESTI, TI PIACEREBBE!`;
        break;
      case 50:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Girati e guarda la vastità del cazzo che me ne frega di questa domanda`;
        break;
      case 51:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ti prego si, FALLO!`;
        break;
      case 52:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Ma sei pazzo? Ma anche no`;
        break;
      case 53:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Il duce approverebbe`;
        break;
      case 54:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Non c'è niente che tu possa fare<br><img src="media/napoleon.jpg" width="300px"><audio autoplay><source src="media/napoleon-meme.mp3"></source></audio>`;
        break;
      case 55:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Agisci come se domani fosse l'ultimo giorno, senza rimpianti`;
        break;
      case 56:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Quanto è vero che Carlo molesta minorenni`;
        break;
      case 57:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: ...<br> MA SEI SERIO???`;
        break;
      case 58:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Sei ancora troppo giovane per queste cose`;
        break;
      case 59:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Punta sempre in alto, alle stelle, se non puoi invece punta ai negri`;
        break;
      case 60:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Con luca sicuramente sarà più rischioso`;
        break;
      // case 61:
      //   risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: `;
      //   break;
      default:
        risposta.innerHTML = `${username.value}: ${userQuestion.value}? <br>8Ball: Mannaggia a Gianni`;
    }
  }
});
