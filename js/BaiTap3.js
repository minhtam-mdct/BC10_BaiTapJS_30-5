function baiTapThree() {
    var n = +document.getElementById('numB3').value;
    var toTal = 0;
    if (n > 2) {
        for (var i = 2; i <= n; i++) {
            toTal += i;
        }
        toTal = toTal + 2 * n;
    } else {
        toTal = "nhập số lớn hơn 2 vì đề bắt đầu bằng 2";
    }

    console.log("Bài 3: ", toTal);
    document.getElementById('bT3').innerHTML = toTal;
}
// baiTapThree();