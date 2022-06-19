document.querySelector("#crossSign").addEventListener("click" , function(){
    window.location.href = "signup.html"
})


let data = JSON.parse(localStorage.getItem("SignUp-Data")) || [];


document.querySelector("form").addEventListener("submit",Logindata)

let LoginData = JSON.parse(localStorage.getItem("Login-Data")) || [];



function Logindata(e){
    e.preventDefault();

        let email = document.querySelector("#email").value
        let pass = document.querySelector("#pwd").value
        let filter=  data.filter(function(e){
            return (email == e.email && pass == e.password);
        })
        if(filter.length>0){
            localStorage.setItem("Login-Data" , JSON.stringify(filter));
            openPop()
        }else{
            alert("Wrong Credential")
        }
        
}



function openPop(){
    let popup = document.querySelector(".popup")
    popup.classList.add("pop-class");
}
function closePop(){
    let popup = document.querySelector(".popup")
    popup.classList.remove("pop-class");
    window.location.href = "../LINKING/index.html"
}
