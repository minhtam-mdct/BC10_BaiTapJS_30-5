function bangCuuChuong(){
    var n = document.getElementById("numB7").value;
    var m = "";
    for(var i = 0; i <= 10; i++){
        ketQua = n * i;
        console.log(n+" x "+i+" = "+ketQua);
        m += n+" x "+i+" = "+ketQua+"<br/>";
    }
    document.getElementById("txtBangCuuChuong").innerHTML = m;
}
// bangCuuChuong();