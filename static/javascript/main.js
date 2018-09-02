let deck = [
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

$( document ).ready(function() {
  // Grabs cookies for user information
  var cookies = document.cookie;

  // Holds bet value
  let value = 0;

  // Hold value of dealer cards
  let dealerVal = 0;

  // Hold value of player cards
  let playerVal = 0;

  // Increments bet value by 5
  $('#bet-five').on('click', function() {
    value += 5;
    $('#bet-amount').html(value);
  })

  // Increments bet value by 10
  $('#bet-ten').on('click', function() {
    value += 10;
    $('#bet-amount').html(value);
  })

  // Increments bet value by 25
  $('#bet-twenty-five').on('click', function() {
    value += 25;
    $('#bet-amount').html(value);
  })

  // Deal the hand when value is set to higher then 0
  $('#deal').on('click', function() {
    var valueObj = {};
    valueObj.value = value;
    if(value > 0) {
      $.ajax({
        data: JSON.stringify(valueObj),
        dataType: 'json',
        type: 'POST',
        url: '/place-bet'
    });

    // Dealer first card
    // Create random number from 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    // Get first card from ranNum
    let dealerCard1 = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add first card to dealer value
    dealerVal += dealerCard1.value

    // Player first card
    // Create random number from 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    //Get second cad from ranNum
    let playerCard1 = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add first card to player value
    playerVal += playerCard1.value

    // Dealer second card
    // Create random number from 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    //Get second cad from ranNum
    let dealerCard2 = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add second card to dealer value
    dealerVal += dealerCard2.value

    // Player second card
    // Create random number from 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    //Get second cad from ranNum
    let playerCard2 = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add second card to player value
    playerVal += playerCard2.value

    // Dealer cards
    $('<div class="card-container"><img src="'+ dealerCard1.img +'"></div>').appendTo('#dealer-cards')
    $('<div class="card-container"><img src="'+ dealerCard2.img +'"></div>').appendTo('#dealer-cards')

    // Player cards
    $('<div class="card-container"><img src="'+ playerCard1.img +'"></div>').appendTo('#player-cards')
    $('<div class="card-container"><img src="'+ playerCard2.img +'"></div>').appendTo('#player-cards')

    // Remove option to deal again and put faded color over deal
    $('#deal').off('click').addClass('button-completed')

    if(dealerVal === 21 && playerVal === 21) {
      // If both player and dealer have Black Jack

    } else {
      // If dealer has Black Jack
      if(dealerVal === 21) {
        $('<div class="announcement-modal">Dealer Black Jack</div>').appendTo('body')
      }

      // If player has Black Jack
      if(playerVal === 21) {
        $('<div class="announcement-modal">Player Black Jack</div>').appendTo('body')
      }
    }

    } else {
      console.log('Place a bet please!')
    }
  })

  // Hit
  $('#hit').on('click', function() {
    // Create random number form 1 - deck.length
    var ranNum = Math.floor(Math.random()*deck.length);
    // Get hit card from ranNum
    let hit = deck[ranNum];
    // Remove ranNum from deck
    deck.splice(ranNum, 1)
    // Add hit card to value
    playerVal += hit.value
    $('<div class="card-container"><img src="'+ hit.img +'"></div>').appendTo('#player-cards')
    if(playerVal > 21) {
      $('#hit').off('click').addClass('button-completed')
      $('#stay').off('click').addClass('button-completed')
      $('#double').off('click').addClass('button-completed')
      $('#split').off('click').addClass('button-completed')
      $('<div class="announcement-modal">Player Bust!</div>').appendTo('body')
    }
  })
});