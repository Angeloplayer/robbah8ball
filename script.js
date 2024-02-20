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
    let randomNumber = Math.floor(Math.random() * 19);

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
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Si`;
        break;
      case 6:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: No`;
        break;
      case 7:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Forse, neldubbio fatti i cazzi tuoi`;
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
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Stanne certo quanto è vero che a Carlo piacciono le bambine`;
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
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Ma io che cazzo ne so, portami una birra`;
        break;
      case 17:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Ti sembro onnisciente? Einstein? Akinator? Fottiti`;
        break;
      case 18:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Che domanda del cazzo, potevi risparmiartela`;
        break;
      // case 19:
      //   risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: `;
      //   break;
      default:
        risposta.innerHTML = `Tu: ${userQuestion.value}? <br>8Ball: Mannaggia a Gianni`;
    }
  }
});
