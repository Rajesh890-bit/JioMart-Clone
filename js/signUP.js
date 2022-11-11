function goTOsignIn() {
    window.location.href = "signIn.html";
}
function goTocart() {
    window.location.href = "cart.html";
}
let registration_data = JSON.parse(localStorage.getItem("account-data")) || []
let myForm = document.getElementById("form");

function checkSignIn(e) {
    registration_data.innerHTML = "";
    e.preventDefault();
    let name = myForm.firstName.value;
    let lname = myForm.lastName.value;
    let email = myForm.emailId.value;
    let pwd = myForm.pwd.value;
    let confirmPwd = myForm.pwd2.value;
    let mobile = myForm.mob.value;

    var objOfUser = {
        Name: name,
        lastName: lname,
        Mail: email,
        Password: pwd,
        Mobile: mobile
    }


    if (name == "" || lname == "" || email == "" || pwd == "" || confirmPwd == "" || mobile == "") {
        alert("please fill the details")
    } else {
        registration_data.push(objOfUser)
        localStorage.setItem("account-data", JSON.stringify(registration_data))
        alert("SignUp Successful")
        goTOsignIn();
    }
}

function refresh() {
    window.location.href = "Index.html"
}