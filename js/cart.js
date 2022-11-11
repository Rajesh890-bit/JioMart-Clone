
// var emptyCart = document.getElementById("emptyCart");
// var productCont = document.getElementById("userProCont");
// let LSCartDataArr = JSON.parse(localStorage.getItem("Carts-ItemArray"));

// ShowItem(LSCartDataArr)

var emptyCart = document.getElementById("emptyCart");
var productCont = document.getElementById("userProCont");

//  fetching data from cart

if (localStorage.getItem("Carts-ItemArray") !== null && JSON.parse(localStorage.getItem("Carts-ItemArray")).length !== 0) {
    var con = document.getElementById("top");
    emptyCart.innerHTML = "";
    var productsArr = JSON.parse(localStorage.getItem("Carts-ItemArray"));
    var total = 0;

    productsArr.forEach(function (product) {
        let divC = document.createElement("div");
        let image = document.createElement("img");
        let d = document.createElement("div");
        let Price = document.createElement("div");
        total += +product.price.trim() * product.quantity;


        if (product.img == undefined) {
            console.log("product not defined");
            image.src = product.image;
        } else {
            image.src = product.img;
        }


        let Name = document.createElement("div");
        let btn = document.createElement("button");
        let quan = document.createElement('div');
        let n = document.createElement('div');
        n.textContent = product.quantity;

        quan.textContent = 'Quantity'
        Name.textContent = "Name of Product: " + product.name;
        Price.textContent = "Price: " + product.price * product.quantity;
        d.append(Name, btn);
        quan.append(n)
        btn.innerText = "Remove";
        btn.style.width = "50%"
        btn.style.border = "none"
        btn.onclick = function () {
            removeEle(product);
        }
        divC.append(image, d, Price, quan);
        con.append(divC);

        let actPrice = document.getElementById("pRc");
        let disPrice = document.getElementById("dSc");
        let tPrice = document.getElementById("tA");


        actPrice.textContent = total.toFixed(2);
        disPrice.textContent = "----";
        tPrice.textContent = total.toFixed(2);
        actPrice.setAttribute("class", "rigthPrice")
        tPrice.setAttribute("class", "rigthPrice")
    })
} else {
    productCont.innerHTML = "";
}

function addPro() {
    window.location.href = "Index.html";
}


function placeOrder() {
    alert("Congratulation You have successfully placed order");
    addPro();
}


function removeEle(product) {

    var productsArr = JSON.parse(localStorage.getItem("Carts-ItemArray"));
    var arr = []
    var cnt = 0;
    for (var i = 0; i < productsArr.length; i++) {
        if (productsArr[i].name === product.name) {
            cnt++;
        }
        if (cnt > 1 && productsArr[i].name === product.name) {
            arr.push(productsArr[i]);
        }
        else if (productsArr[i].name !== product.name) {
            arr.push(productsArr[i]);
        }
    }
    console.log(arr);
    localStorage.setItem("Carts-ItemArray", JSON.stringify(arr));

    window.location.href = "Cart.html";
}



function refresh() {
    window.location.href = "Index.html";
}