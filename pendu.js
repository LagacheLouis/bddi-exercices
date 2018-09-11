// Prérequis pour le prompteur (pas d'importance pour le cours)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// La fonction Game a terminer (ça se corse)

const WORD_LIST = ['chevre', 'vache']

class Game {
  constructor() {
    let letters = [], // letters entered by user
      lives = 5, // lives left
      word, // the current word
      missing // number of letters missing

    function init() {
      lives = 5

      word = WORD_LIST[Math.floor(Math.random() * Math.floor(WORD_LIST.length))];
        letters = []
      // Count without duplicated
      missing = Array.prototype.filter.call(word, (letter, i) => {
        return word.indexOf(letter) == i
      }).length
    }

    function addLetter(letter) {
      // TODO: cette fonction doit :
      // - vérifier que la lettre n'a pas déjà été tentée auparavent
      // - si ce n'est pas le cas, l'ajouter dans le tableau `letters`
      // - modifier `lives` et `missing` en conséquence
      // - ne retourne rien
      // - (6 lignes)
      if(letters.includes(letter)){
        console.log("Tu as déjà testé cette lettre");
      }else{
        letters.push(letter);
        if(word.includes(letter)){
          missing--;
        }else {
          lives--;
          console.log("Mauvaise lettre !!!");
        }
      }
    }

    function displayWord() {
      // TODO: cette fonction doit:
      // - retourner une chaine de caractère
      // - les lettres trouvées et celles manquantes remplacées par un underscore
      // - exemple : v_ch_e
      // - Utiliser une boucle for et la concaténation
      // - (9 lignes)
      let currentword = "";

      for (let i = 0; i < word.length; i++) {
          if(letters.includes(word[i])){
            currentword += word[i];
          }else{
            currentword += "_";
          }
      }

      return currentword;
    }

    function prompt(cb) {
      console.log(Array(lives + 1).join('❤'))
      rl.question(displayWord() + '\r\n', cb)
    }

    function onAnswer(answer) {
      addLetter(/* TODO: appeler la fonction addLetter en envoyant la première lettre de `answer` (1 ligne) */ answer[0])

      if (missing > 0 && lives > 0) {
        prompt(onAnswer)
      }
      else {
        console.log(['End of the game.', 'you', missing > 0 ? 'lose' : 'win', '!'].join(' '))
        rl.close()
      }
    }

    return {
      play() {
        init()
        console.log('Vous êtes prêts ? Devinez le mot.')
        prompt(onAnswer)
      }
    }
  }
  play() { }
}

const game = new Game()

game.play()
