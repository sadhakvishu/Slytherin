document.querySelector("#crossSign").addEventListener("click" , function(){
    window.location.href = "Signup.html"
})


let data = JSON.parse(localStorage.getItem("SignUp-Data")) || [];


document.querySelector("form").addEventListener("submit",Logindata)

let LoginData = JSON.parse(localStorage.getItem("Login-Data")) || [];



function Logindata(e){
    e.preventDefault();
    let loginObj ={
        email : document.querySelector("#email").value,
        password : document.querySelector("#pwd").value,
    }
    data.forEach(function(e){
        if(loginObj.email === e.email && loginObj.password=== e.password){
            localStorage.setItem("Login-Data" , JSON.stringify(data));
            openPop()
            
        }else{
            alert("Wrong Credentital!")
        }
    })
}



function openPop(){
    let popup = document.querySelector(".popup")
    popup.classList.add("pop-class");
}
function closePop(){
    let popup = document.querySelector(".popup")
    popup.classList.remove("pop-class");
    window.location.href = "index.html"
}
