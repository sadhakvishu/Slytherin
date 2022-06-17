// let cartData = [
//     {image : "https://cdn-images.farfetch-contents.com/14/73/33/06/14733306_23521938_1000.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn.modesens.com/product/24467249_1?w=400&",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn.modesens.com/product/31247385_7?w=400&",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn-images.farfetch-contents.com/15/76/97/70/15769770_28843936_1000.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn-images.farfetch-contents.com/17/61/09/10/17610910_36726635_1000.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn.modesens.com/product/23960074_1?w=400&",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211193M180004_1.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn-images.farfetch-contents.com/14/73/33/06/14733306_23521938_1000.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn.modesens.com/product/24467249_1?w=400&",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn.modesens.com/product/31247385_7?w=400&",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn-images.farfetch-contents.com/15/76/97/70/15769770_28843936_1000.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn-images.farfetch-contents.com/17/61/09/10/17610910_36726635_1000.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://cdn.modesens.com/product/23960074_1?w=400&",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 - $546",
//     store : "7 Store"},
//     {image : "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211193M180004_1.jpg",
//     name : "MARCELO BURLON COUNTY",
//     category : "Camouflage-print Technical Jersey Track",
//     rate : "$144 -",
//     store : "7 Store"}
// ]

let cart = JSON.parse(localStorage.getItem("cartdata")) || [];

if(cart.length==0){
    let empty = document.createElement("div")
    empty.id = "empty-cart"
    let text = document.createElement("h2");
    text.innerText = "Cart Is Empty"
    empty.append(text);
    document.querySelector("#main").append(empty)
}else{
    DisplayCart(cart);
}



function DisplayCart(cart){    
    let totalPrice = 0;
    document.querySelector("#main").innerHTML = "";
    cart.forEach(function(e,index){
        let count1 = e.counter;
        totalPrice += e.rate*count1;
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
            totalPrice += e.rate*count1;
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
            }

        })
        let box2 = document.createElement("div");
        let name =  document.createElement("h3");
        name.innerText = e.name;
        let category = document.createElement("p");
        category.innerText = e.category;
        let rate = document.createElement("h5");
        rate.innerText = `MRP: ${e.rate}`;
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
        document.querySelector("#main").append(box);
    })

        document.querySelector("#price-value").innerText = totalPrice;
        document.querySelector("#subtotal").innerText = totalPrice+109;
        document.querySelector("#apply").addEventListener("click", function(){
            let coupon = document.querySelector("#coupon").value;
            if(coupon==="Masai123"){
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
    localStorage.setItem("cartdata", JSON.stringify(cart));  
    DisplayCart(cart);

}