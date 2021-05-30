function chiaBai() {
    var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
        "AS", "7H", "9K", "10D"];
    var player1 = [];
    var player2 = [];
    var player3 = [];
    var player4 = [];
    // var convertedCards = cards.split(", ");

    // for(var i = 0; i < convertedCards.length; i++){
    //     CardsList.push(convertedCards[i]);
    // }

    for(var k = 0; k < cards.length; k++){
        player1.push(cards[k]);
        k++;
        player2.push(cards[k]);
        k++;
        player3.push(cards[k]);
        k++;
        player4.push(cards[k]);
    }
    document.getElementById('player1').innerHTML = player1;
    document.getElementById('player2').innerHTML = player2;
    document.getElementById('player3').innerHTML = player3;
    document.getElementById('player4').innerHTML = player4;
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
}
chiaBai();