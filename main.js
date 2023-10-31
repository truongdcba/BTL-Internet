var addShow0 = () => {
    var product = document.querySelectorAll(".list-product .li-0");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var addShow1 = () => {
    var product = document.querySelectorAll(".list-product .li-1");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var addShow2 = () => {
    var product = document.querySelectorAll(".list-product .li-2");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var addShow3 = () => {
    var product = document.querySelectorAll(".list-product .li-3");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var addShow4 = () => {
    var product = document.querySelectorAll(".list-product .li-4");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var addShow5 = () => {
    var product = document.querySelectorAll(".list-product .li-5");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var addShow6 = () => {
    var product = document.querySelectorAll(".list-product .li-6");
    product.forEach(item => {
        item.classList.add("show");
    })
}
var xoa = () => {
    var list = document.querySelectorAll(".list-product .delete");
    list.forEach(item => {
        item.classList.remove("show");
    })
}

var addColor = () => {
    var list = document.querySelectorAll(".list-product ul li");
    var idx = 0; //mặc định khối đầu tiên khi vào web được show ra
    list.forEach((item, index, arr) => {
        item.onclick = () => {
            if (idx !== index) {
                if (idx !== "") arr[idx].classList.remove("addBackground");
                item.classList.add("addBackground")
            }
            idx = index;

            if (index === 0) {
                xoa();
                addShow0();
            } else if (index === 1) {
                xoa();
                addShow1();
            } else if (index === 2) {
                xoa();
                addShow2();
            } else if (index === 3) {
                xoa();
                addShow3();
            } else if (index === 4) {
                xoa();
                addShow4();
            } else if (index === 5) {
                xoa();
                addShow5();
            } else {
                xoa();
                addShow6();
            }
        }
    })
}
addColor();

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Số lượng sản phẩm bán ra hàng tháng',
            data: [65, 59, 80, 81, 60, 48, 50, 65, 82, 74, 80, 87],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    }
});