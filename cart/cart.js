
let cart = JSON.parse(localStorage.getItem("cartPage")) || [];

if(cart.length==0){
    let empty = document.createElement("div")
    empty.id = "empty-cart"
    let img = document.createElement("img")
    img.src = "https://careerindex.co.in/assets/images/emptycart.png"
    let text = document.createElement("h2");
    text.innerText = "Cart Is Empty"
    empty.append(img);
    document.querySelector("#main").append(empty);
    document.querySelector("#coupval").innerText = "None"
    document.querySelector("#delievery").innerText = "None"
}else{
    DisplayCart(cart);
}



function DisplayCart(cart){    
    let totalPrice = 0;
    document.querySelector("#main").innerHTML = "";
    cart.forEach(function(e,index){
        let count1 = (e.count);
        console.log(count1)
        totalPrice += +(e.price);
        let box = document.createElement("div");
        let box1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src" , e.image);
        let box3 = document.createElement("div");
        box3.id = "count"
        let count = document.createElement("h5");
        count.id = "counter";
        count.innerText = "Qty :" + " " + count1;
        let cbtninc = document.createElement("button");
        cbtninc.id = "inc";
        cbtninc.innerText = "+"
        cbtninc.addEventListener("click", function(){
            count1++;
            count.innerText = "Qty :" + " " + count1;
            localStorage.setItem("countQty" , count1)
            totalPrice += e.price*count1;
        })
        let cbtninc2 = document.createElement("button");
        cbtninc2.id = "dec";
        cbtninc2.innerText = "-"
        cbtninc2.addEventListener("click", function(){
            count1--;
            if(count1<0){
                alert("Already Zero Qty");
            }
            else{
            count.innerText = "Qty :" + " " + count1;
            localStorage.setItem("countQty" , count1)
            }

        })
        let box2 = document.createElement("div");
        let name =  document.createElement("h3");
        name.innerText = e.name;
        let category = document.createElement("p");
        category.innerText = e.category;
        let rate = document.createElement("h5");
        rate.innerText = `MRP: $ ${e.price}`;
        let btn2 = document.createElement("button");
        btn2.innerText = "Add To WishList Again"
        let br = document.createElement("br");
        let btn = document.createElement("button");
        btn.innerText = "Remove Item From Cart";
        btn.addEventListener("click" , function(){
            del(index)
        })
        box2.append(name,category,rate,btn2,br,btn)
        box1.append(img);
        box3.append(count,cbtninc,cbtninc2);
        box.append(box2,box3,box1);
        box.id = "mainchild"
        document.querySelector("#main").append(box);
    })

        document.querySelector(".price-value").innerText = totalPrice;
        document.querySelector("#subtotal").innerText = totalPrice+109;
        document.querySelector("#apply").addEventListener("click", function(){
            let coupon = document.querySelector("#coupon").value;
            if(coupon==="slytherin123"){
                document.querySelector("#subtotal").innerText = eval(totalPrice+109-((totalPrice +109) *(15/100)))
                document.querySelector("#coupval").innerText =`You Got 15% Dicount`
            }else{
                alert("Wrong Coupon Code");
                document.querySelector("#price-value").innerText = totalPrice; 
            }
        })    
}
function del(index){
    cart.splice(index,1);
    window.location.reload()
    localStorage.setItem("cartPage", JSON.stringify(cart));  
    DisplayCart(cart);

}