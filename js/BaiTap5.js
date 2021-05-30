function daoSo(){
    var n = document.getElementById('txtDaoSo').value;
    var m = "";
    for(var i = n.length; i >= 0; i--){
        m += n.substr(i,1);
    }
    document.getElementById('daoSo').innerHTML = m;
    console.log(m);
}
// daoSo();