

//........................... SliderIMAgeStart.............
let images = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667838765_1667233182_Biggest-Savings-on-Selected-Products_1680-x-320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667922746_1667839739_1667755395_Audio-Fest-JioMart-Carousel-Banner-23_08_2022_1.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667923543_1667839104_1667755003_Android_Days_Banner_2_Desktop2.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667923749_1667842017_1667755160_Atta-_-Flour_1680x320_4.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667930089_1667852812_Nov-8_Web_9.jpg",



];


let sliderIMG = document.querySelector("#slideContainer");
sliderIMG.style.cursor = "pointer"

let BannerImage = document.createElement("img");
BannerImage.style.width = "100%"
BannerImage.style.height = "300px"
BannerImage.src = images[0];
sliderIMG.append(BannerImage);
let count;

startSlideShow()


function startSlideShow() {
    console.log("running")
    count = 1;
    setInterval(function () {
        sliderIMG.innerHTML = null;
        let img = document.createElement("img");
        img.style.width = "100%";
        img.style.height = "350px";
        if (count == images.length) {
            count = 0;
        }

        let buttonLeft = document.createElement("button");
        buttonLeft.innerText = "<";
        buttonLeft.className = "slideDL";

        sliderIMG.append(buttonLeft);
        buttonLeft.onclick = function () {
            slideLeft();
            function slideLeft() {
                img.src = images[--count];
                if (count > 0) {
                    console.log(count);
                    sliderIMG.append(img);
                }
            }
        }

        let buttonR = document.createElement("button");
        buttonR.innerText = ">";
        buttonR.className = "slideDR";


        sliderIMG.append(buttonR);
        buttonR.onclick = function () {
            slideRight();
            function slideRight() {
                img.src = images[++count];
                if (count + 1 < images.lenght) {
                    console.log(count);
                    sliderIMG.append(img);
                }
            }
        }

        if (count > -1) {
            img.src = images[count];
            sliderIMG.append(img);
            count++;
        }
    },
        3500);
}

//...................................poster1..............................


function poster1() {
    let div = document.getElementById("poster1");
    div.style.width = "100%";
    div.style.marginTop = "5px";
    div.style.textAlign = "center";
    let image = document.createElement("img");
    image.style.height = "100%";
    image.style.width = "98%";
    image.src = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg";
    div.append(image);
}

poster1();

function poster2() {
    let div = document.getElementById("poster2");
    div.style.width = "100%";
    div.style.marginTop = "5px";
    div.style.textAlign = "center";
    let image = document.createElement("img");
    image.style.height = "100%";
    image.style.width = "98%";
    image.src = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1662531217_Wednesday_Bonus.jpg";
    div.append(image);
}

poster2();


function poster3() {
    let div = document.getElementById("poster3");
    div.style.width = "100%";
    div.style.marginTop = "5px";
    div.style.textAlign = "center";
    let image = document.createElement("img");
    image.style.height = "100%";
    image.style.width = "98%";
    image.src = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1667239568_1665072912_Oct-6_Slim-Banner.jpg";
    div.append(image);
}

poster3();




