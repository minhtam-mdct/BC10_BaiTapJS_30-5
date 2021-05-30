// function baiTapOne() {
//     var n = 0;
//     var m = 0;
//     var k = "0";
//     for (var i = 1; i <= 100; i++) {
//             n += i;
//             n += " ";
//             m += i;
//             m += " ";

//         if (i % 10 === 0) {
//             m += "\n";
//             n += "<br/>";
//         }

//     }
//     console.log(m);
//     document.getElementById('bT1').innerHTML = n;
// }
// baiTapOne();

function baiTapOne() {
    var n = "";
    var m = 1;
    
    
    for (var k = 10; k <= 100; k += 10) {
        n += "<tr>"
        for (var i = m; i <= k; i++) {
            n += "<td>" + i + "</td>";
        }
        m += 10;
        n += "</tr>"
    }
    document.getElementById('bangSo').innerHTML = n;
    console.log(n);
}
baiTapOne();

