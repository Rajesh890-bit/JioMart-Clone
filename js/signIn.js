function goTOsignIn() {
    window.location.href = "index.html";
}
// function goTocart() {
//     window.location.href = "cart.html";
// }

// function refresh() {
//     window.location.href = "Index.html"
// }

let LSdata = JSON.parse(localStorage.getItem("account-data")) || [];
document.querySelector("form").addEventListener("submit", myFun);

function myFun() {
    let enter_email = document.querySelector("#email").value;
    let enter_password = document.querySelector("#password").value;
    if (enter_email == "" || enter_password == "") {
        alert("Wrong Credentials");
    } else {
        for (let i = 0; i < LSdata.length; i++) {
            if (
                enter_email == LSdata[i].Mail &&
                enter_password == LSdata[i].Password
            ) {
                alert("Sign in Successful Redirecting to Home Page");
                goTOsignIn()
                console.log("YES")
                break;
            }
        }

        alert("Wrong Credentials");

    }
}
