function baiTap9(){
    var n = document.getElementById('txtSoChan').value;
    var m = document.getElementById("txtTongChoGa").value;
    var soCho = 0;
    var soGa = 0;
    var warning = "";
    if(n % 2 === 0 && m % 2 === 0){
        if(n / m >= 2){
        soCho = (n - (2*m)) / 2;
        soGa = m - soCho;
        document.getElementById("warning").style.display = "none";
        } else{
            warning = "Tổng số chân phải ≥ (Tổng số chó và gà x 2)";
        }
    } else{
        warning = "số chân và tổng số chó và gà phải là số chẵn";
    }
    document.getElementById("soCho").innerHTML = soCho;
    document.getElementById("soGa").innerHTML = soGa;
    document.getElementById("warning").innerHTML = warning;
    console.log(soCho);
    console.log(soGa);
}
// baiTap9();