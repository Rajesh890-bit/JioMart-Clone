

//........................... SliderIMAgeStart.............
let slideIndex = 1;
setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);

}, 3500);
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += "active";
}

//...................................SliderImage end..............................

//.......................Midsection Shopfront category.....................//


// Pending


//........................midsection end.................................//


// ..........................Top category...................

let data2 = [
    {
        img: "https://www.jiomart.com/images/product/150x150/490008739/parle-g-original-glucose-biscuits-800-g-0-20210115.jpg",
        name: "Parle-G Biscuits 800 g ",
        price: "67.50",
        mrp: "M.R.P: 75.00",
        save: "You Save: 7.50",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-0-202203152128.jpg",
        name: "Amul Butter 500 g ",
        price: "255.00",
        mrp: "M.R.P: 265.00",
        save: "You Save: 10.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-0-202209281320.jpg",
        name: "Britania NutriChice Hi-fiber Digestuve",
        price: " 81.00",
        mrp: "M.R.P:  159.00",
        save: "You Save:  40.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/491349660/chakki-atta-10-kg-0-20210301.jpg",
        name: "Chakki  gold Atta 10 kg",
        price: "285.00",
        mrp: "M.R.P: 375.00",
        save: "You Save: 90.00",
    },
    {
        img: "https://www.jiomart.com/images/product/420x420/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-0-20210818.jpg",
        name: "Lux Rose 150g (Pack of 3)",
        price: "96.00",
        mrp: " M.R.P: 149.00",
        save: "You Save:  53.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/491696497/del-monte-tomato-ketchup-1-1-kg-product-images-o491696497-p590126648-0-202203170833.jpg",
        name: "Del Monte Tomato Ketchup 1.1kg",
        price: " 89.00",
        mrp: " M.R.P: 160.00",
        save: "You Save: 70.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/490672482/dabur-red-toothpaste-200-100-g-with-free-toothbrush-0-20210514.jpg",
        name: "Dabur Red Toothpaste 300 g ",
        price: "103.34",
        mrp: "M.R.P:  155.00",
        save: "You Save:  51.66",
    },
    {
        img: "https://www.jiomart.com/images/product/420x420/491441280/surf-excel-matic-top-load-detergent-powder-4-kg-get-extra-2-kg-free-0-20210125.jpg",
        name: "Surf Excel  4 kg ( Extra 2 kg Free)",
        price: " 869.00",
        mrp: "M.R.P: 1100.00",
        save: "You Save:  231.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/491215021/gala-no-dust-broom-xl-0-20210825.jpg",
        name: "Gala No Dust Broom (XL)",
        price: " 159.00",
        mrp: " M.R.P: 200.00",
        save: "You Save: 41.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/490012719/gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202203151822.jpg",
        name: "Gemini Refined Sunflower Oli 1 L",
        price: " 175.00",
        mrp: " M.R.P: 239.00",
        save: "You Save: 46.00",
    },
    {
        img: "https://www.jiomart.com/images/product/150x150/490003766/rin-ala-fabric-whitener-500-ml-product-images-o490003766-p490003766-0-202209081628.jpg",
        name: "Rin Ala Fabric Whitener 500 ml",
        price: " 75.00",
        mrp: " M.R.P: 89.00",
        save: "You Save: 14.00",
    }, {
        img: "https://www.jiomart.com/images/product/150x150/490850761/quaker-oats-1-5-kg-product-images-o490850761-p490850761-0-202203170759.jpg",
        name: "Quaker Oats 1.5 kg",
        price: " 197.00",
        mrp: " M.R.P: 292.00",
        save: "You Save: 95.00",
    },

];


let container = document.querySelector("#topDeals1");
showProductt(data2);
function showProductt(d) {
    d.forEach(function (product) {

        let div2 = document.createElement("div");
        div2.setAttribute("class", "div2")
        let div2_img = document.createElement("div")
        div2_img.setAttribute("class", "div2_img")

        let div2_text = document.createElement("div")
        div2_text.setAttribute("class", "div2_text")

        let div2_btn = document.createElement("div")
        div2_btn.setAttribute("class", "div2_btn")

        let img2 = document.createElement("img");
        img2.src = product.img
        img2.setAttribute("class", "img2")

        let price2 = document.createElement("p");
        price2.textContent = product.price;
        price2.style.fontSize = "16px"
        price2.style.fontWeight = "560"



        let name2 = document.createElement("p");
        name2.textContent = product.name;
        name2.style.fontSize = "16px"
        name2.style.fontWeight = "560"

        let mrp2 = document.createElement("p")
        mrp2.textContent = product.mrp

        let save2 = document.createElement("p")
        save2.textContent = product.save
        save2.style.color = "green"

        let btn2 = document.createElement("button");
        btn2.innerText = "Add to Cart +";
        btn2.setAttribute("class", "btn2")

        btn2.onclick = function () {
            addtocart(product)
        }
        div2_img.append(img2)
        div2_text.append(name2, price2, mrp2, save2)
        div2_btn.append(btn2)
        div2.append(div2_img, div2_text, div2_btn)
        container.append(div2)
    });
}



let LSCartItems = [];
function addtocart(data) {
    LSCartItems.push(data);
    localStorage.setItem("Carts-ItemArray", JSON.stringify(LSCartItems));
}