function baiTap6(){
    var n = 1;
    var x = 0;
    for(var i = 2; i <= 100 ; i++){
        n += i;
        
        if(n <= 100){
            console.log(i)
            x = i;
        }
    }
    console.log(x);
    document.getElementById("xNguyenDuong").innerHTML = x;   
}
baiTap6();