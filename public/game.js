        
    $(document).ready(function () {
        
        var deck = [];
        var deck2 = [];
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
        var compare = [];
        var yourWins = 0;
        var cpuWins = 0;
        var stalemates = 0;
        var yourCards = 52;
        var cpuCards = 52;


        function getDeck() {
            var deck = [];
            for (var i = 0; i < suits.length; i++) {
                for (var x = 0; x < values.length; x++) {
                    var card = { Value: values[x], Suit: suits[i] };
                    deck.push(card);
                }
            }

            return deck;
        }

        function getDeck2() {
            var deck2 = [];
            for (var i = 0; i < suits.length; i++) {
                for (var x = 0; x < values.length; x++) {
                    var card = { Value: values[x], Suit: suits[i] };
                    deck2.push(card);
                }
            }

            return deck2;
        }

        function renderDeck() {
            document.getElementById("deck").innerHTML = "";
            for (var i = 0; i < deck.length; i++) {
                var card = document.createElement("div");
                var value = document.createElement("div");
                var suit = document.createElement("div");
                card.className = "card " + deck[i].Suit + deck[i].Value + " " + "jumbotron " + "jumbotron-fluid";
                value.className = "value" + deck[i].Value + " " + deck[i].Suit;
                suit.className = "suit " + deck[i].Suit;
                value.innerHTML = deck[i].Value;
                card.appendChild(value);
                card.appendChild(suit);
                document.getElementById("deck").appendChild(card);
                $(".value11").text("J");
                $(".value12").text("Q");
                $(".value13").text("K");
                $(".value14").text("A");
            }
            var modalClose = $("<div><h1>Your Deck</h1><button id='modalClose' type='button' class='btn btn-danger' data-dismiss='modal' aria-label='Close'><img src='card-hand.png' style='max-height: 30px'><span aria-hidden='true'>&times;</span>Close</div>");
            $("#deck").prepend(modalClose);
        }

        function renderDeck2() {
            document.getElementById("deck2").innerHTML = "";
            for (var i = 0; i < deck2.length; i++) {
                var card = document.createElement("div");
                var value = document.createElement("div");
                var suit = document.createElement("div");
                card.className = "card " + deck2[i].Suit + deck2[i].Value + " " + "jumbotron " + "jumbotron-fluid";
                value.className = "value" + deck2[i].Value + " " + deck2[i].Suit;
                suit.className = "suit " + deck2[i].Suit;
                value.innerHTML = deck2[i].Value;
                card.appendChild(value);
                card.appendChild(suit);
                document.getElementById("deck2").appendChild(card);
                $(".value11").text("J");
                $(".value12").text("Q");
                $(".value13").text("K");
                $(".value14").text("A");
            }
            var modalClose = $("<div><h1>CPU Deck</h1><button id='modalClose' type='button' class='btn btn-danger' data-dismiss='modal' aria-label='Close'><img src='card-hand.png' style='max-height: 30px'><span aria-hidden='true'>&times;</span>Close</div>");
            $("#deck2").prepend(modalClose);
        }

        $("#draw").on("click", function () {
            $("#deal")[0].play();
            $("#compare").show(1000);
            $("#draw").hide(3000);
            $("#draw").prop("disabled", true, 5000);
            var firstCard = deck[0];
            var firstCPUcard = deck2[0];
            console.log(firstCard);
            console.log(firstCPUcard);
            compare.push(firstCard);
            compare.push(firstCPUcard);
            console.log(compare);
            compareHands();
            var dex = deck.indexOf(firstCard);
            var dexCPU = deck2.indexOf(firstCPUcard);
            console.log(dex);
            console.log(dexCPU);
            deck.splice(dex, 1);
            deck2.splice(dexCPU, 1);
            console.log(deck);
            console.log(deck2);
            renderDeck();
            renderDeck2();
            var cardValue = parseInt(Object.values(firstCard));
            var cpuValue = parseInt(Object.values(firstCPUcard));
            console.log(cardValue);
            console.log(cpuValue);

            if (cpuValue > cardValue) {
                setTimeout(function () {
                    $("#compare").hide(3000);
                    $("#whoWins").show();
                    $("#whoWins").text("You Lose!");
                    $('#whoWins').animate({ fontSize: '60px' }, 1000);
                    $("#draw").show(3000);
                    $("#whoWins").fadeOut(1500);
                    $("#loser")[0].play();
                    cpuWins++;
                    cpuCards++;
                    yourCards--;
                    $("#cpuWins").text(cpuWins);
                    $("#cpuCards").text(cpuCards);
                    $("#yourCards").text(yourCards);
                    $("#draw").prop("disabled", false);
                    
                }, 3000);
                $('#whoWins').animate({ fontSize: '0px' }, 1000);
                deck2.push(firstCPUcard);
                deck2.push(firstCard);
                compare.splice(0, 2);
                console.log(compare);
                renderDeck2();
            }


            if (cpuValue < cardValue) {
                setTimeout(function () {
                    $("#compare").hide(3000);
                    $("#whoWins").show();
                    $("#whoWins").text("You Win!");
                    $('#whoWins').animate({ fontSize: '60px' }, 1000);
                    $("#draw").show(3000);
                    $("#whoWins").fadeOut(1500);
                    yourWins++;
                    yourCards++;
                    cpuCards--;
                    $("#yourWins").text(yourWins);
                    $("#cpuCards").text(cpuCards);
                    $("#yourCards").text(yourCards);
                    $("#lewya")[0].play(5000);
                    $("#draw").prop("disabled", false);
                    
                }, 3000);
                $('#whoWins').animate({ fontSize: '0px' }, 1000);
                deck.push(firstCPUcard);
                deck.push(firstCard);
                compare.splice(0, 2);
                console.log(compare);
                renderDeck();
            }

            if (cpuValue === cardValue) {
                setTimeout(function () {
                    $("#compare").hide(3000);
                    $("#whoWins").show();
                    $("#whoWins").text("Stalemate!");
                    $('#whoWins').animate({ fontSize: '60px' }, 1000);
                    $("#draw").show(3000);
                    $("#draw").prop("disabled", false);
                    $("#whoWins").fadeOut(1500);
                    stalemates++;
                    yourCards--;
                    cpuCards--;
                    $("#cpuCards").text(cpuCards);
                    $("#yourCards").text(yourCards);
                    $("#stalemates").text(stalemates);
                    
                    
                }, 3000);
                $('#whoWins').animate({ fontSize: '0px' }, 1000);
                var graveYard = [];
                graveYard.push(firstCard);
                graveYard.push(firstCPUcard);
                console.log(graveYard);
                compare.splice(0, 2);
                console.log(compare);
                renderDeck();
                renderDeck2();
            }
        });

        function compareHands() {
            document.getElementById("compare").innerHTML = "";
            for (var i = 0; i < compare.length; i++) {
                var handCard = document.createElement("div");
                var handValue = document.createElement("div");
                var handSuit = document.createElement("div");
                handCard.className = "card " + compare[i].Suit + compare[i].Value + " " + "jumbotron " + "jumbotron-fluid";
                handValue.className = "value" + compare[i].Value + " " + compare[i].Suit;
                handSuit.className = "suit " + compare[i].Suit;
                handValue.innerHTML = compare[i].Value;
                handCard.appendChild(handValue);
                handCard.appendChild(handSuit);
                document.getElementById("compare").appendChild(handCard);
                $(".value11").text("J");
                $(".value12").text("Q");
                $(".value13").text("K");
                $(".value14").text("A");
            }
        }

        function shuffleDeck() {
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++) {
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function shuffleDeck2() {
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++) {
		var location1 = Math.floor((Math.random() * deck2.length));
		var location2 = Math.floor((Math.random() * deck2.length));
		var tmp = deck2[location1];

		deck2[location1] = deck2[location2];
		deck2[location2] = tmp;
	}

	renderDeck2();
}

        function load() {
            deck = getDeck();
            deck2 = getDeck2();
            shuffleDeck();
            shuffleDeck2();
            // renderDeck();
            // renderDeck2();
            console.log(deck);
            console.log(deck2);
            $("#yourCards").text(yourCards);
            $("#cpuCards").text(cpuCards);
            $("#yourWins").text(yourWins);
            $("#cpuWins").text(cpuWins);
            $("#stalemates").text(stalemates);
        }
        window.onload = load;

    });