function baiTap10() {
    var nhapGio = +document.getElementById("nhapGio").value;
    var nhapPhut = +document.getElementById("nhapPhut").value;
    var soLech = 0;
    var gocLech = 0;
    if (nhapGio <= 12 && nhapPhut <= 60) {
        /**
         *  quy khoảng cách kim giờ và kim phút về cùng đơn vị trên mặt đồng hồ
         *  từ 1 - 12:
         *  - Kim phút đi dc 1 số = 5
         *  - kim giờ đi dc 1 số = *5
         *  Khoảng cách là hiệu soLech = phút - giờ
         *  Sau đó lấy soLech * 6 = số góc
         * */ 
        // chỉ tính dc 180 độ
        soLech = nhapPhut - (nhapGio * 5);
        if (soLech < 0) {
            // Nếu là số âm là quá 180 độ nên phải cộng thêm 30 đơn vị (30*6 = 180 độ) để bù lại
            soLech = 30 + (soLech * (-1));
        }
        gocLech = soLech * 6;
        document.getElementById("bT10").innerHTML = gocLech + " độ";
        document.getElementById("warningBT10").style.display = "none";
        console.log(gocLech);
    } else {
        var warning = document.getElementById("warningBT10").innerHTML = "Vui lòng nhập thời gian hợp lệ";
    }

}
// baiTap10();