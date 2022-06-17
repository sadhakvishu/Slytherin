


let dataArr = JSON.parse(localStorage.getItem("person-data")) || []



document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault();
    let Dataobj = {
        name: document.querySelector("#name").value,
        number : document.querySelector("#number").value,
        gender : document.querySelector("#radio").value,
        country : document.querySelector("#select").value,
        state : document.querySelector("#select2").value
    }
    if(Dataobj.name ===""){
        alert("Enter Your Name")
    }else if(Dataobj.number === ""){
        alert("Enter Your Mobile Number")
    }else{
        dataArr.push(Dataobj);
        localStorage.setItem("person-data" , JSON.stringify(dataArr))
        alert("Account Created Successfully")
        window.location.href = "login.html";
    }
})