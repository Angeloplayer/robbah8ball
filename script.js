// 8ball
// Utente e saluto

let username = "Angelo" || "Unknow";
username ? console.log(`Hello ${username}!`) : console.log("Hello!");

// Domanda e risposta
let userQuestion = document.getElementById("domanda");
userQuestion.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    console.log(`${username}: Tu: ${userQuestion.value}`);
    let risposta = document.getElementById("risposta");
    // Numero casuale da 0 a 7 + palla
    let randomNumber = Math.floor(Math.random() * 36);

    // Funzionamento palla
    switch (randomNumber) {
      case 1:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Chiedilo a quel cazzone di Peppe`;
        break;
      case 2:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Tu si, Gianni no`;
        break;
      case 3:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Sicuramente Ferdi saprà aiutarti`;
        break;
      case 4:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Se ad Axsu chiederai non te ne pentirai`;
        break;
      case 5:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Si Djocan`;
        break;
      case 6:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: No cazzo`;
        break;
      case 7:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Forse, nel dubbio fatti i cazzi tuoi`;
        break;
      case 8:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Non lo so, suca`;
        break;
      case 9:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: PEFFOOOOOOOORZA`;
        break;
      case 10:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Boh nel dubbio kys`;
        break;
      case 11:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Ma io che cazzo ne so scusi?`;
        break;
      case 12:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Stanne certo quanto è vero che a Carlo e Gianni piacciono le bambine`;
        break;
      case 13:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Ancora a farmi domande? Vai su LOL porco Dio`;
        break;
      case 14:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Potrebbe essere, lo scoprirai a meno che tu non esploda prima`;
        break;
      case 15:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Quando gli asini voleranno`;
        break;
      case 16:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Ma io che cazzo ne so, portami una birra <br>-Brixie`;
        break;
      case 17:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Ti sembro onnisciente? Einstein? Akinator? Fottiti`;
        break;
      case 18:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Che domanda del cazzo, potevi risparmiartela`;
        break;
      case 19:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Nda chella zombatrombapisciapert e mammt ma c sfaccim n sacc`;
        break;
      case 20:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Mammt a pecr direbbe di si`;
        break;
      case 21:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Non lo so, io al massimo te posso cantare na canzone`;
        break;
      case 22:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Solo se i testimoni di Geova smetteranno di suonare i campanelli di casa`;
        break;
      case 23:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Dipende, faresti mai un patto con Luca?`;
        break;
      case 24:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Le tue probabilità sono alte quanto le probabilità che Brixie abbia il fumo addosso`;
        break;
      case 25:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Probabile quanto il successo di Gianni con le donne`;
        break;
      case 26:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Certo, se finisce male però non mi prendo responsabilità`;
        break;
      case 27:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Possibile quanto l'esistenza di Dio`;
        break;
      case 28:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Palese quanto il pulllman che arriva appena accendi una sigaretta`;
        break;
      case 29:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Tenta, al massimo finisci per essere inculato`;
        break;
      case 30:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Risponditi da solo, a prescindere il risultato sarà meno divertente rispetto alla nascità di Peppe`;
        break;
      case 31:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Perhè me lo chiedi? <br>Cosa ti passa per la mente maniaco?`;
        break;
      case 32:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Questa domanda sa di pedofilo`;
        break;
      case 33:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Qualunque pensi sia la risposta giusta, sappi che di certo invadere la polonia non è la soluzione`;
        break;
      case 34:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Mi poni questa domanda solo perchè pensi di sapere di non sapere, Socrate Fake dei miei stivali`;
        break;
      case 35:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Prova con questo <a href="https://youtu.be/xvFZjo5PgG0?si=LCptTZDfQkTDhDUz">video</a>`;
        break;
      // case 19:
      //   risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: `;
      //   break;
      default:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Mannaggia a Gianni`;
    }
  }
});
