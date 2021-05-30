function devisorNumb(){
    var n = +document.getElementById('numB4').value;
    var count = 0;
    var devisor = [];
    for(var i = 1; i <= n; i++){
        if(n % i === 0){
            count++;
            devisor.push(" "+i);
        }
    }
    document.getElementById('countDevisor').innerHTML = count;
    document.getElementById('devisorNumb').innerHTML = devisor;
    console.log(count);
    console.log(devisor);
}
// devisorNumb();