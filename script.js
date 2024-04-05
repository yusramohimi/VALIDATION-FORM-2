// declaration

const form=document.getElementById('form');
const fullname=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const birthDate = document.getElementById('birthDate');
const gender = document.querySelectorAll('select').value



//events 

form.addEventListener('submit',function(e){
    e.preventDefault();
    // fullname
    if (fullname.value.trim() === ""){
        errorMsg(fullname,"Username is required");
    }else {
         successMsg(fullname);
    }

    // email
    if ((email.value.trim() === "")){
        errorMsg(email,"Email is required");
    }else if(email.value.trim() != ""){
       emailCheck(email)
    } else{
         successMsg(email);
    }

    // password
    if (password.value.trim() === ""){
        errorMsg(password,"Enter your password");
    }else {
         successMsg(password);
    }

    // birth date
    
    if(birthDate.value.trim() === ""){
        errorMsg(birthDate,"Select your date of birth")
    }else{
        successMsg(birthDate)
    }
})


    //gender 
    if (gender === ""){
        selecterror(gender,"Select your gender")
    }else{
        successMsg(gender)
    }


//functions


function errorMsg(input,msg){
    const form_control = input.parentElement;
    // console.log(form_control);
    form_control.className = "form-control error"
    const span = form_control.querySelector('span');
    // console.log(small);
    span.innerText=msg
}

function successMsg(input){
    const form_control = input.parentElement;
    form_control.className = "form-control success"
}
function emailCheck(input){
    const re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){ //trim(): pour enlever l'espace
        successMsg(input);
    }else{
        errorMsg(input,'Enter a valid Email address')
    }
    
}
