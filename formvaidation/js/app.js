// UI
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("cfmpassword");


// Event Listener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("hay");


    if (username.value === '') {

        showerror(username, "username is required!");

    } else {
        showsuccess(username);
    }

    if (email.value === ''){
        showerror(email,"Email is Required!");
    }else if( !validateEmail(email.value)){
        showerror(email,"Email is not Valid!");
    }
    else {
        showsuccess(email);
    }
    if (password.value ===''){
        showerror(password,"Password is Required!");
    }else {
        showsuccess(gitpassword);
    }

    if (cfmpassword.value ===''){
        showerror(cfmpassword,"Password is Required!");
    }else if(password.value !== cfmpassword.value){
        showerror(cfmpassword,"Password is don't Mathch!");
    }
    else {
        showsuccess(cfmpassword);
    }


});

function showerror(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector("small");
    small.innerText = message;
}

function showsuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
    // formcontrol.classList.remove('error');
    // formcontrol.classList.add('success');
}
// Regular Expression
//for Checking Email Format
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}