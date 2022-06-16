document.querySelector("form").addEventListener("submit" , SignUpData);




let signUpArr = JSON.parse(localStorage.getItem("SignUp-Data")) || [];

function SignUpData(e){
    e.preventDefault();
    let SignIn ={
        email : document.querySelector("#email").value,
        password : document.querySelector("#pwd").value
    }
    if(CheckEmail(SignIn.email)===true && SignIn.password.length >5){
        signUpArr.push(SignIn);
        localStorage.setItem("SignUp-Data" , JSON.stringify(signUpArr));
        window.location.href = "data.html";
    }
    else{
        alert("Email Already Exists")
    }
}    


function CheckEmail(email){
    let filter = signUpArr.filter(function(el){
        return email === el.email;
    })
    if(filter.length>0){
        return false;
    }else{
        return true;
    }
}