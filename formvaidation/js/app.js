// UI
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("cfmpassword");


// Event Listener
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     // console.log("hay");
//
//
//     if (username.value === '') {
//
//         showerror(username, "username is required!");
//
//     } else {
//         showsuccess(username);
//     }
//
//     if (email.value === ''){
//         showerror(email,"Email is Required!");
//     }else if( !validateEmail(email.value)){
//         showerror(email,"Email is not Valid!");
//     }
//     else {
//         showsuccess(email);
//     }
//     if (password.value ===''){
//         showerror(password,"Password is Required!");
//     }else {
//         showsuccess(gitpassword);
//     }
//
//     if (cfmpassword.value ===''){
//         showerror(cfmpassword,"Confirm Password is Required!");
//     }else if(password.value !== cfmpassword.value){
//         showerror(cfmpassword,"Password is don't Mathch!");
//     }
//     else {
//         showsuccess(cfmpassword);
//     }
//
//
// });

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
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// Check Required Field
function checkrequired(inputarrs) {
    // console.log(inputarrs);

    inputarrs.forEach(function (inputarr){
        // console.log(inputarr);
        // console.log(inputarr.value);
        // console.log(inputarr.id);

        if(inputarr.value ===''){
            showerror(inputarr,`${getfieldname(inputarr)} is required!`);

        }else {
            showsuccess(inputarr);
        }
    });
}

// Get Field Name
function getfieldname(inputarr){
    // console.log(inputarr);//1
    // console.log(inputarr.id);//2
    return (inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1));//2

    // return inputarr.id;
}
// Check Input Length
function checklength(input,min,max){
    if (input.value.length<min){
        showerror(input,`${getfieldname(input)} must be at least ${min} character`);
    }else if(input.value.length>max){
        showerror(input,`${getfieldname(input)} must be less than ${max} character`);
    }else {
        showsuccess(input);
    }
}

// getfieldname(username.id);//1
// getfieldname(username);//2
// Check Email is Vaild
function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // return re.test(String(email).toLowerCase());

    if (re.test(input.value)){// test => string value check
        showsuccess(input);
    }else {
        showerror(input,'Email is not valid');
    }
}
 // Check Passwords Match
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showerror(input2,"Password Do not Match");
    }
}

// Event Listener (Method 2)
form.addEventListener('submit',function (e){
    e.preventDefault();
    // console.log('hay');

    checkrequired([username,email,password,cfmpassword]);

    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);

    checkpasswordsmatch(password,cfmpassword);

});
