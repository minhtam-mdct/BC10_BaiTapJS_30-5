var primeList = [];
function addPrime(){
    var txtPrime = document.getElementById('txtPrime').value;
    var convertedPrime = txtPrime.split(",");

    for(var i = 0; i < convertedPrime.length; i++){
        primeList.push(+convertedPrime[i]);
    }
    document.getElementById("txtCheckPrime").innerHTML = primeList;
    console.log(primeList);
}
function findPrime(){
    var numPrime = [];
    for(var i = 0; i < primeList.length; i++){
        var count = 0;
        for(var k = 0; k <= primeList[i]; k++){
            if(primeList[i] === 0 || primeList[i] === 1){
                count = 3;
            } else if(primeList[i] % k === 0){
                count++;
            }
        }
        if(count <= 2){
            numPrime.push(primeList[i]);
        }
    }
    console.log(numPrime);
    document.getElementById('numPrime').innerHTML = numPrime;
}
