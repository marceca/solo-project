function resetDeck() {
  return [
    {
      value: 2,
      name: 'Two of Clubs',
      img: '/cards/2C.png'
    },
    {
      value: 3,
      name: 'Three of Clubs',
      img: '/cards/3C.png'
    },
    {
      value: 4,
      name: 'Four of Clubs',
      img: '/cards/4C.png'
    },
    {
      value: 5,
      name: 'Fve of Clubs',
      img: '/cards/5C.png'
    },
    {
      value: 6,
      name: 'Six of Clubs',
      img: '/cards/6C.png'
    },
    {
      value: 7,
      name: 'Seven of Clubs',
      img: '/cards/7C.png'
    },
    {
      value: 8,
      name: 'Eight of Clubs',
      img: '/cards/8C.png'
    },
    {
      value: 9,
      name: 'Nine of Clubs',
      img: '/cards/9C.png'
    },
    {
      value: 10,
      name: 'Ten of Clubs',
      img: '/cards/10C.png'
    },
    {
      value: 10,
      name: 'Jack of Clubs',
      img: '/cards/JC.png'
    },
    {
      value: 10,
      name: 'Queen of Clubs',
      img: '/cards/QC.png'
    },
    {
      value: 10,
      name: 'King of Clubs',
      img: '/cards/KC.png'
    },
    {
      value: 11,
      name: 'Ace of Clubs',
      img: '/cards/AC.png'
    },
    {
      value: 2,
      name: 'Two of Spades',
      img: '/cards/2S.png'
    },
    {
      value: 3,
      name: 'Three of Spades',
      img: '/cards/3S.png'
    },
    {
      value: 4,
      name: 'Four of Spades',
      img: '/cards/4S.png'
    },
    {
      value: 5,
      name: 'Fve of Spades',
      img: '/cards/5S.png'
    },
    {
      value: 6,
      name: 'Six of Spades',
      img: '/cards/6S.png'
    },
    {
      value: 7,
      name: 'Seven of Spades',
      img: '/cards/7S.png'
    },
    {
      value: 8,
      name: 'Eight of Spades',
      img: '/cards/8S.png'
    },
    {
      value: 9,
      name: 'Nine of Spades',
      img: '/cards/9S.png'
    },
    {
      value: 10,
      name: 'Ten of Spades',
      img: '/cards/10S.png'
    },
    {
      value: 10,
      name: 'Jack of Spades',
      img: '/cards/JS.png'
    },
    {
      value: 10,
      name: 'Queen of Spades',
      img: '/cards/QS.png'
    },
    {
      value: 10,
      name: 'King of Spades',
      img: '/cards/KS.png'
    },
    {
      value: 11,
      name: 'Ace of Spades',
      img: '/cards/AS.png'
    },
    {
      value: 2,
      name: 'Two of Hearts',
      img: '/cards/2H.png'
    },
    {
      value: 3,
      name: 'Three of Hearts',
      img: '/cards/3H.png'
    },
    {
      value: 4,
      name: 'Four of Hearts',
      img: '/cards/4H.png'
    },
    {
      value: 5,
      name: 'Fve of Hearts',
      img: '/cards/5H.png'
    },
    {
      value: 6,
      name: 'Six of Hearts',
      img: '/cards/6H.png'
    },
    {
      value: 7,
      name: 'Seven of Hearts',
      img: '/cards/7H.png'
    },
    {
      value: 8,
      name: 'Eight of Hearts',
      img: '/cards/8H.png'
    },
    {
      value: 9,
      name: 'Nine of Hearts',
      img: '/cards/9H.png'
    },
    {
      value: 10,
      name: 'Ten of Hearts',
      img: '/cards/10H.png'
    },
    {
      value: 10,
      name: 'Jack of Hearts',
      img: '/cards/JH.png'
    },
    {
      value: 10,
      name: 'Queen of Hearts',
      img: '/cards/QH.png'
    },
    {
      value: 10,
      name: 'King of Hearts',
      img: '/cards/KH.png'
    },
    {
      value: 11,
      name: 'Ace of Hearts',
      img: '/cards/AH.png'
    },
    {
      value: 2,
      name: 'Two of Diamonds',
      img: '/cards/2D.png'
    },
    {
      value: 3,
      name: 'Three of Diamonds',
      img: '/cards/3D.png'
    },
    {
      value: 4,
      name: 'Four of Diamonds',
      img: '/cards/4D.png'
    },
    {
      value: 5,
      name: 'Fve of Diamonds',
      img: '/cards/5D.png'
    },
    {
      value: 6,
      name: 'Six of Diamonds',
      img: '/cards/6D.png'
    },
    {
      value: 7,
      name: 'Seven of Diamonds',
      img: '/cards/7D.png'
    },
    {
      value: 8,
      name: 'Eight of Diamonds',
      img: '/cards/8D.png'
    },
    {
      value: 9,
      name: 'Nine of Diamonds',
      img: '/cards/9D.png'
    },
    {
      value: 10,
      name: 'Ten of Diamonds',
      img: '/cards/10D.png'
    },
    {
      value: 10,
      name: 'Jack of Diamonds',
      img: '/cards/JD.png'
    },
    {
      value: 10,
      name: 'Queen of Diamonds',
      img: '/cards/QD.png'
    },
    {
      value: 10,
      name: 'King of Diamonds',
      img: '/cards/KD.png'
    },
    {
      value: 11,
      name: 'Ace of Diamonds',
      img: '/cards/AD.png'
    }
  ]
}

$( document ).ready(function() {
  let deck = resetDeck();
  
  // Grabs cookies for user information
  var cookies = document.cookie;

  // Holds bet value
  let value = 0;

  // Hold value of dealer cards
  let dealerVal = 0;

  // Hold value of player cards
  let playerVal = 0;


  //////////////////////////
  // Declaring functions //
  ////////////////////////

  function toggleButtonStateOff() {
    $('#hit').attr('data-click-state', 0).addClass('button-completed');
    $('#stay').attr('data-click-state', 0).addClass('button-completed');
    $('#double').attr('data-click-state', 0).addClass('button-completed');
    $('#split').attr('data-click-state', 0).addClass('button-completed');
  }
  
  function toggleButtonStateOn() {
    $('#hit').attr('data-click-state', 1).removeClass('button-completed');
    $('#stay').attr('data-click-state', 1).removeClass('button-completed');
    $('#double').attr('data-click-state', 1).removeClass('button-completed');
    $('#split').attr('data-click-state', 1).removeClass('button-completed');
  }

  function toggleStartGame() {
    $('#deal').attr('data-click-state', 1).removeClass('button-completed');
    $('#bet-five').attr('data-click-state', 1).removeClass('button-completed');
    $('#bet-ten').attr('data-click-state', 1).removeClass('button-completed');
    $('#bet-twenty-five').attr('data-click-state', 1).removeClass('button-completed');
  }
  
  function dealerDrawACard() {
    // Dealer first card
    // Create random number from 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    // Get first card from ranNum
    let dealerCard = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add first card to dealer value
    dealerVal += dealerCard.value
    $('<div class="card-container"><img src="'+ dealerCard.img +'"></div>').appendTo('#dealer-cards')

  }
  
  function playerDrawACard() {
    // Player first card
    // Create random number from 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    //Get second cad from ranNum
    let playerCard = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add first card to player value
    playerVal += playerCard.value
    $('<div class="card-container"><img src="'+ playerCard.img +'"></div>').appendTo('#player-cards')

  }

  function playDealerOut() {
    while(dealerVal < 17) {
      if(dealerVal > 21) {
        alert('Player wins! Dealer Bust!')
      }
      dealerDrawACard();
    }
    if(dealerVal > playerVal && dealerVal <= 21) {
      $('<div class="announcement-modal">Dealer wins</div>').appendTo('#outcome-modal')
    } else if(playerVal > dealerVal || dealerVal > 21) {
      $('<div class="announcement-modal">Player wins!!</div>').appendTo('#outcome-modal')
      $.ajax({
        data: {'value': value},
        dataType: 'json',
        type: 'POST',
        url: '/player-won'
      });
    } else {
      $('<div class="announcement-modal">Push</div>').appendTo('#outcome-modal');
      $.ajax({
        data: {'value': value},
        dataType: 'json',
        type: 'POST',
        url: '/player-push'
      });
    }
    $('#reset-game').attr('data-click-state', '1').removeClass('button-completed');
  }

  // Reset game
  function resetGame() {
    if($('#reset-game').attr('data-click-state') === '1') {
      // Toggle bag to the start position for betting buttons and deal button
      toggleStartGame();
      // Toggle hit, stand, double and split back off for start of game
      toggleButtonStateOff();
      // Reset bet value
      value = 0;
      // Reset value of dealer cards
      dealerVal = 0;
      // Hold value of player cards
      playerVal = 0;
      // Update value for bet amount
      $('#bet-amount').html(value);
      // Toggle reset button off
      $('#reset-game').attr('data-click-state', '1').addClass('button-completed');
      // Remove all cards from board state
      $('#dealer-cards').empty();
      $('#player-cards').empty();
      $('#outcome-modal').empty();
      // Reset the deck
      deck = resetDeck();
    }
  }

  // Increments bet value by 5
  $('#bet-five').on('click', function() {
    if($('#bet-five').attr('data-click-state') === '1') {
      value += 5;
      $('#bet-amount').html(value);
    }
  })

  // Increments bet value by 10
  $('#bet-ten').on('click', function() {
    if($('#bet-five').attr('data-click-state') === '1') {
      value += 10;
      $('#bet-amount').html(value);
    }
  })

  // Increments bet value by 25
  $('#bet-twenty-five').on('click', function() {
    if($('#bet-five').attr('data-click-state') === '1') {
      value += 25;
      $('#bet-amount').html(value);
    }
  })


  ///////////////////////////////////////////////////////
  // Deal the hand when value is set to higher then 0 //
  /////////////////////////////////////////////////////
  $('#deal').on('click', function() {
    if($('#deal').attr('data-click-state') === '1') {
      var valueObj = {};
      valueObj.value = value;
      if(value > 0) {
        $.ajax({
          data: {'value': value},
          dataType: 'json',
          type: 'POST',
          url: '/place-bet'
        });
      }

      playerDrawACard();

      dealerDrawACard();

      playerDrawACard();

      dealerDrawACard();

      // Remove option to deal and change bet value. Add opacity to signal to player
      $('#deal').attr('data-click-state', 0).addClass('button-completed');
      $('#bet-five').attr('data-click-state', 0).addClass('button-completed');
      $('#bet-ten').attr('data-click-state', 0).addClass('button-completed');
      $('#bet-twenty-five').attr('data-click-state', 0).addClass('button-completed');

      // Add Hit, Stay, Double and Split button functionality
      toggleButtonStateOn();

      if(dealerVal === 21 && playerVal === 21) {
        // If both player and dealer have Black Jack
        $('<div class="announcement-modal">Push!</div>').appendTo('#outcome-modal');
        toggleButtonStateOff();
        resetGame();
        $('#reset-game').attr('data-click-state', '0').removeClass('button-completed');
      } else {
        // If dealer has Black Jack
        if(dealerVal === 21) {
          $('<div class="announcement-modal">Dealer Black Jack</div>').appendTo('#outcome-modal');
          toggleButtonStateOff();
          resetGame();
          $('#reset-game').attr('data-click-state', '0').removeClass('button-completed');
        }
        // If player has Black Jack
        if(playerVal === 21) {
          $('<div class="announcement-modal">Player Black Jack</div>').appendTo('#outcome-modal');
          toggleButtonStateOff();
          resetGame();
          $('#reset-game').attr('data-click-state', '0').removeClass('button-completed');
        }
      }
    } else {
      console.log('Place a bet please!')
    }
  })

  //////////
  // Hit //
  ////////
  $('#hit').on('click', function() {
    if($('#hit').attr('data-click-state') === '1') {
      // Create random number form 1 - deck.length
      playerDrawACard();
    }
    if(playerVal > 21) {
      // If player busts remove functionality of buttons and show modal Player Bust!
      $('<div class="announcement-modal">Player Bust!</div>').appendTo('#outcome-modal')
      toggleButtonStateOff()
      $('#reset-game').attr('data-click-state', '1').removeClass('button-completed');
    }
  })

  ///////////
  // Stay //
  /////////
  $('#stay').on('click', function() {
    // Remove functionality of buttons
    toggleButtonStateOff();
    // Play dealer hand out
    playDealerOut();
  })

  /////////////
  // Double //
  ///////////
  $('#double').on('click', function() {
    if($('#double').attr('data-click-state') === '1') {
      // Parse cookies for Credits select the number
      let regEx = /Credits=(\d+)/
      // Getting the number from array
      let c = cookies.match(regEx);
      // Making credits easier to read
      let credits = c[1]
      // If user has more then double value in credits proceed
      if(credits > (value * 2)) {
        // Show new bet total amount
        $('#bet-amount').html(value * 2);
        playerDrawACard();
        toggleButtonStateOff();
        if(playerVal <= 21) {
          playDealerOut();
        }
        if(playerVal > 21) {
          $('<div class="announcement-modal">Player Bust!</div>').appendTo('#outcome-modal');
        }
      } else {
        alert('You need more credits!!');
      }
    }
  })

  /////////////////
  // Reset game //
  ///////////////
  $('#reset-game').on('click', function() {
    resetGame();
  })
    
  
  // Reset cookies on refresh
  $(window).bind('beforeunload',function(){
    fetch('/get-new-cookies', {
      method: 'POST',
      mode: 'same-origin',
      // This is the key to updating cookies. With out redirect: follow cookies will not save
      redirect: 'follow',
    })
  });
});