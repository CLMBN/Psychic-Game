// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var wins = 0;
      var losses = 0;
      var guesses = 9;
      var textTyped = "";


      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

        // Determines which key was pressed
        var userGuess = event.key;
        textTyped = textTyped + userGuess + ", ";  

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = options[Math.floor(Math.random() * options.length)];


      if (userGuess === computerGuess) {
          wins++;
          guesses = 9;
          textTyped = "";
      }
      else {
          guesses--;
      }

      if (guesses < 1){
        guesses = 9;
        losses++;  
        textTyped = "";      
      }


        document.querySelector("#win").innerHTML = wins;
        document.querySelector("#lose").innerHTML = losses;
        document.querySelector("#guessesLeft").innerHTML = guesses;
        document.querySelector("#yourGuesses").innerHTML = textTyped;
      }