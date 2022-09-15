let img = document.querySelector("#crausal img")
// console.log(img)

let imgNum = 0;
let imgArray = [
    "https://cdn.modesens.com/banner/20220613-modesens-SummerFashionGuide-1140x400-EN.jpg",
    "https://cdn.modesens.com/banner/20220612-modesens-TheSportsEdit-1140x400-EN.jpg",
    "https://cdn.modesens.com/banner/20220614-modesens-Monnalisa-1140x400-EN.jpg",
    "https://cdn.modesens.com/banner/20220613-modesens-AERYNE-1140x400-EN.jpg",
    "https://cdn.modesens.com/banner/20220614-modesens-lengjingblog-1140x400.jpg",
    "https://cdn.modesens.com/banner/20220516-modesens-SS22-SALE-1140x400-EN.jpg",
    "https://cdn.modesens.com/banner/20220614-modesens-saledresses-1140x400-F.jpg",
    "https://cdn.modesens.com/banner/20220613-modesens-FSaintLaurent-1140x400-F.jpg",
    "https://cdn.modesens.com/banner/20220607-modesens-Beachvibes-1140x400-F.jpg"

]
let buttons = document.querySelectorAll("button")
console.log(buttons) //11
buttons[0].addEventListener("click", function () {
    if (imgNum == 0) {
        imgNum = imgArray.length - 1
    } else {
        imgNum--
    }
    img.src = imgArray[imgNum]
})


buttons[1].addEventListener("click", function () {
    if (imgNum == imgArray.length - 1) {
        imgNum = 0;
    } else {
        imgNum++
    }
    img.src = imgArray[imgNum]
})

// special offer main div
let image2 = document.querySelectorAll(".off")
// console.log(image.length)  //5

let img1 = image2[0];
let img2 = image2[1];
let img3 = image2[2]
// console.log(img1,img2,img3)

let head = document.querySelectorAll(".heading")
let h1 = head[0]
let h2 = head[1]
let h3 = head[2]

let para = document.querySelectorAll(".paragraph")
let p1 = para[0];
let p2 = para[1];
let p3 = para[2]

let imgArray2 = [
    { link: "https://cdn.modesens.com/banner/20220612-modesens-Gucci-364x484.jpg", head: "GUCCI", para: "Father's Day Gifts" },
    { link: "https://cdn.modesens.com/banner/20220531-modesens-Farfetch-364x484.jpg", head: "Safe is here", para: "Enjoy uo to 50%" },
    { link: "https://cdn.modesens.com/banner/20220615Designer-Collab-modesens364x484-F.jpg", head: "Our Kind Of Dream Team", para: "Collaboration is SO in Fashion" },
    { link: "https://cdn.modesens.com/banner/20220531-modesens-Sale-364x484.jpg", head: "New To Sale", para: "Fresh Cut" },
    { link: "https://cdn.modesens.com/banner/20220615-modesens-SummerFashionGuide-364x484.jpg", head: "ModeSens Fasion Guide", para: "2022 Summer Trends" },
    { link: "https://cdn.modesens.com/banner/20220609-modesens-FPillowBags-364x484-F.jpg", head: "Relieve That Slumber Party Fun", para: "Discover a pillow bag for everyday wear" },
    { link: "https://cdn.modesens.com/banner/20220609-modesens-Sheerpants-364x484-Fgai.jpg", head: "Delight In YOUR See-Through-Ness", para: "Wear transparent pants" },
    { link: "https://cdn.modesens.com/banner/20220610-modesens-blog-364x484-F.jpg", head: "Less Seasons And More Sizes", para: "Blog by SSENSE" }
]
console.log(imgArray2[4])
let imgNum2 = 0;

let button2 = document.querySelectorAll(".special")
console.log(button2)
button2[0].addEventListener("click", function () {

    if (imgNum2 === 0) {
        imgNum2 = imgArray2.length - 1;
    } else {
        imgNum2--

    }
    let bag = imgNum2;
    img1.src = imgArray2[imgNum2].link
    h1.innerText = imgArray2[imgNum2].head;
    p1.innerText = imgArray2[imgNum2].para;
    console.log(imgNum2)
    if (imgNum2 == imgArray2.length - 1) {
        imgNum2 = 0
        img2.src = imgArray2[imgNum2].link
        h2.innerText = imgArray2[imgNum2].head
        p2.innerText = imgArray2[imgNum2].para;
        console.log(imgNum2)
    } else {
        imgNum2++
        img2.src = imgArray2[imgNum2].link
        h2.innerText = imgArray2[imgNum2].head
        p2.innerText = imgArray2[imgNum2].para
        console.log(imgNum2)
    }
    if (imgNum2 === imgArray2.length - 1) {
        imgNum2 = 0
        img3.src = imgArray2[imgNum2].link;
        h3.innerText = imgArray2[imgNum2].head
        p3.innerText = imgArray2[imgNum2].para
        console.log(imgNum2)
    } else {
        imgNum2++
        img3.src = imgArray2[imgNum2].link;
        h3.innerText = imgArray2[imgNum2].head
        p3.innerText = imgArray2[imgNum2].para
        console.log(imgNum2)
    }
    imgNum2 = bag
})
button2[1].addEventListener("click", function () {


    if (imgNum2 >= imgArray2.length - 1) {
        imgNum2 = 0;
        console.log(imgNum2)
    } else {
        imgNum2++
        console.log(imgNum2)
    }
    let bag = imgNum2;
    img1.src = imgArray2[imgNum2].link
    h1.innerText = imgArray2[imgNum2].head;
    p1.innerText = imgArray2[imgNum2].para;

    if (imgNum2 == imgArray2.length - 1) {
        imgNum2 = 0
        img2.src = imgArray2[imgNum2].link
        h2.innerText = imgArray2[imgNum2].head;
        p2.innerText = imgArray2[imgNum2].para;
        console.log(imgNum2)
        imgNum2 = 0;
    } else {
        imgNum2++
        img2.src = imgArray2[imgNum2].link
        h2.innerText = imgArray2[imgNum2].head;
        p2.innerText = imgArray2[imgNum2].para;
        console.log(imgNum2)

    }

    if (imgNum2 == imgArray2.length - 1) {
        imgNum2 = 0
        img3.src = imgArray2[imgNum2].link
        h3.innerText = imgArray2[imgNum2].head;
        p3.innerText = imgArray2[imgNum2].para;
        console.log(imgNum2)
    } else {
        imgNum2++
        img3.src = imgArray2[imgNum2].link
        h3.innerText = imgArray2[imgNum2].head;
        p3.innerText = imgArray2[imgNum2].para;
        console.log(imgNum2)
    }
    imgNum2 = bag
})

// download footer div
document.querySelector("#load").addEventListener("click", function () {
    alert("You Pressed Download Button.")
})

// trending Now

let image3 = document.querySelectorAll(".now")
// console.log(image3[2])
let now1 = image3[0];
let now2 = image3[1];
let now3 = image3[2];
let now4 = image3[3];

let para3 = document.querySelectorAll(".pa")
let pa1 = para3[0];
let pa2 = para3[1]
let pa3 = para3[2]
let pa4 = para3[3]

let head3 = document.querySelectorAll(".hd")
let hd1 = head3[0];
let hd2 = head3[1];
let hd3 = head3[2];
let hd4 = head3[3];

console.log(para3.length)

let imgNum3 = 0;
let imgArray3 = [
    { link: "https://cdn.modesens.com/product/7298931_66?w=400&", head: "first", para: "one" },
    { link: "https://cdn-images.farfetch-contents.com/17/78/37/20/17783720_39317799_1000.jpg", head: "second", para: "two" },
    { link: "https://cdn.modesens.com/product/41449769_2?w=400&", head: "third", para: "three" },
    { link: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212144F109000_1.jpg", head: "fourth", para: "four" },
    { link: "https://cdn.modesens.com/product/40615641_2?w=400&", head: "fifth", para: "five" },
    { link: "https://cdn.modesens.com/availability/48383362?w=400&", head: "sixth", para: "six" },
    { link: "https://cdn.modesens.com/availability/37731631?w=400&", head: "seventh", para: "seven" },
    { link: "https://cdn.modesens.com/availability/45024068?w=400&", head: "eighth", para: "eight" },

    { link: "https://cdn.modesens.com/product/18444081_124?w=400&", head: "ninth", para: "nine" },
    { link: "https://cdn.modesens.com/availability/48287774?w=400&", head: "tenth", para: "ten" },
    { link: "https://cdn.modesens.com/availability/49345070?w=400&", head: "eleventh", para: "eleven" },
    { link: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/202418F128276_1.jpg", head: "twelveth", para: "twelve" }

]

let button3 = document.querySelectorAll(".trend")

button3[0].addEventListener("click", function () {

    if (imgNum3 === 0) {
        imgNum3 = imgArray3.length - 1;
    } else {
        imgNum3--
    }
    let bag = imgNum3;
    // 1st div
    now1.src = imgArray3[imgNum3].link
    hd1.innerText = imgArray3[imgNum3].head;
    pa1.innerText = imgArray3[imgNum3].para;
    console.log(imgNum3)

    // 2nd div
    if (imgNum3 == imgArray3.length - 1) {
        imgNum3 = 0
        now2.src = imgArray3[imgNum3].link
        hd2.innerText = imgArray3[imgNum3].head
        pa2.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
    } else {
        imgNum3++
        now2.src = imgArray3[imgNum3].link
        hd2.innerText = imgArray3[imgNum3].head
        pa2.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
    }
    // 3rd div
    if (imgNum3 === imgArray3.length - 1) {
        imgNum3 = 0
        now3.src = imgArray3[imgNum3].link;
        hd3.innerText = imgArray3[imgNum3].head
        pa3.innerText = imgArray3[imgNum3].para
        console.log(imgNum3)
    } else {
        imgNum3++
        now3.src = imgArray3[imgNum3].link;
        hd3.innerText = imgArray3[imgNum3].head
        pa3.innerText = imgArray3[imgNum3].para
        console.log(imgNum3)
    }
    // 4th div
    if (imgNum3 === imgArray3.length - 1) {
        imgNum3 = 0
        now4.src = imgArray3[imgNum3].link
        hd4.innerText = imgArray3[imgNum3].head
        pa4.innerText = imgArray3[imgNum3].para
    } else {
        imgNum3++
        now4.src = imgArray3[imgNum3].link
        pa4.innerText = imgArray3[imgNum3].para
        pa4.innerText = imgArray3[imgNum3].para
    }
    imgNum3 = bag
})
button3[1].addEventListener("click", function () {


    if (imgNum3 >= imgArray3.length - 1) {
        imgNum3 = 0;
        console.log(imgNum3)
    } else {
        imgNum3++
        console.log(imgNum3)
    }
    let bag = imgNum3;

    // 1st div

    now1.src = imgArray3[imgNum3].link
    hd1.innerText = imgArray3[imgNum3].head;
    pa1.innerText = imgArray3[imgNum3].para;

    // 2nd div
    if (imgNum3 == imgArray3.length - 1) {
        imgNum3 = 0
        now2.src = imgArray3[imgNum3].link
        hd2.innerText = imgArray3[imgNum3].head
        pa2.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)

    } else {
        imgNum3++
        now2.src = imgArray3[imgNum3].link
        hd2.innerText = imgArray3[imgNum3].head
        pa2.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
        console.log(imgNum3)

    }

    // 3th div
    if (imgNum3 == imgArray3.length - 1) {
        imgNum3 = 0
        now3.src = imgArray3[imgNum3].link
        hd3.innerText = imgArray3[imgNum3].head
        pa3.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
        console.log(imgNum3)
    } else {
        imgNum3++
        now3.src = imgArray3[imgNum3].link
        hd3.innerText = imgArray3[imgNum3].head
        pa3.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
    }
    // 4th div
    if (imgNum3 == imgArray3.length - 1) {
        imgNum3 = 0
        now4.src = imgArray3[imgNum3].link
        hd4.innerText = imgArray3[imgNum3].head
        pa4.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
    } else {
        imgNum3++
        now4.src = imgArray3[imgNum3].link
        hd4.innerText = imgArray3[imgNum3].head
        pa4.innerText = imgArray3[imgNum3].para;
        console.log(imgNum3)
    }


    imgNum3 = bag
})


// Recently Viewed

let image4 = document.querySelectorAll(".rvimg")

let rv1 = image4[0];
let rv2 = image4[1];
let rv3 = image4[2];
let rv4 = image4[3];

let para4 = document.querySelectorAll(".rvp")
let rvp1 = para4[0];
let rvp2 = para4[1]
let rvp3 = para4[2]
let rvp4 = para4[3]

let head4 = document.querySelectorAll(".rvh")
let rvh1 = head4[0];
let rvh2 = head4[1];
let rvh3 = head4[2];
let rvh4 = head4[3];
// console.log(head4.length)
// console.log(para3.length)

let imgNum4 = 0;
let imgArray4 = [
    { link: "https://cdn-images.farfetch-contents.com/18/25/72/72/18257272_38992881_1000.jpg", head: "first", para: "one" },
    { link: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212144F109000_1.jpg", head: "second", para: "two" },
    { link: "https://cdn.modesens.com/availability/48383362?w=400&", head: "third", para: "three" },
    { link: "https://cdn.modesens.com/product/41449769_2?w=400&", head: "fourth", para: "four" },
    { link: "https://cdn.modesens.com/product/40615641_2?w=400&", head: "fifth", para: "five" },
    { link: "https://cdn.modesens.com/availability/48383362?w=400&", head: "sixth", para: "six" },
    { link: "https://cdn.modesens.com/availability/37731631?w=400&", head: "seventh", para: "seven" },
    { link: "https://cdn.modesens.com/availability/45024068?w=400&", head: "eighth", para: "eight" },

    { link: "https://cdn.modesens.com/product/18444081_124?w=400&", head: "ninth", para: "nine" },
    { link: "https://cdn.modesens.com/availability/48287774?w=400&", head: "tenth", para: "ten" },
    { link: "https://cdn.modesens.com/availability/49345070?w=400&", head: "eleventh", para: "eleven" },
    { link: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/202418F128276_1.jpg", head: "twelveth", para: "twelve" }

]

let button4 = document.querySelectorAll(".viewed")

button4[0].addEventListener("click", function () {

    if (imgNum4 === 0) {
        imgNum4 = imgArray4.length - 1;
    } else {
        imgNum4--
    }
    let bag = imgNum4;
    // 1st div
    rv1.src = imgArray4[imgNum4].link
    rvh1.innerText = imgArray4[imgNum4].head;
    rvp1.innerText = imgArray4[imgNum4].para;
    console.log(imgNum4)

    // 2nd div
    if (imgNum4 == imgArray4.length - 1) {
        imgNum4 = 0
        rv2.src = imgArray4[imgNum4].link
        rvh2.innerText = imgArray4[imgNum4].head;
        rvp2.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    } else {
        imgNum4++

        rv2.src = imgArray4[imgNum4].link
        rvh2.innerText = imgArray4[imgNum4].head;
        rvp2.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    }
    // 3rd div
    if (imgNum4 === imgArray4.length - 1) {
        imgNum4 = 0

        rv3.src = imgArray4[imgNum4].link
        rvh3.innerText = imgArray4[imgNum4].head;
        rvp3.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    } else {
        imgNum4++
        rv3.src = imgArray4[imgNum4].link
        rvh3.innerText = imgArray4[imgNum4].head;
        rvp3.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    }
    // 4th div
    if (imgNum4 === imgArray4.length - 1) {
        imgNum4 = 0
        rv4.src = imgArray4[imgNum4].link
        rvh4.innerText = imgArray4[imgNum4].head;
        rvp4.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    } else {
        imgNum4++
        rv4.src = imgArray4[imgNum4].link
        rvh4.innerText = imgArray4[imgNum4].head;
        rvp4.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    }
    imgNum4 = bag
})
button4[1].addEventListener("click", function () {


    if (imgNum4 >= imgArray4.length - 1) {
        imgNum4 = 0;
        console.log(imgNum4)
    } else {
        imgNum4++
        console.log(imgNum4)
    }
    let bag = imgNum4;

    // 1st div

    rv1.src = imgArray4[imgNum4].link
    rvh1.innerText = imgArray4[imgNum4].head;
    rvp1.innerText = imgArray4[imgNum4].para;

    // 2nd div
    if (imgNum4 == imgArray4.length - 1) {
        imgNum4 = 0
        rv2.src = imgArray4[imgNum4].link
        rvh2.innerText = imgArray4[imgNum4].head;
        rvp2.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)

    } else {
        imgNum4++
        rv2.src = imgArray4[imgNum4].link
        rvh2.innerText = imgArray4[imgNum4].head;
        rvp2.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
        console.log(imgNum4)

    }

    // 3th div
    if (imgNum4 == imgArray4.length - 1) {
        imgNum4 = 0
        rv3.src = imgArray4[imgNum4].link
        rvh3.innerText = imgArray4[imgNum4].head;
        rvp3.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
        console.log(imgNum4)
    } else {
        imgNum4++
        rv3.src = imgArray4[imgNum4].link
        rvh3.innerText = imgArray4[imgNum4].head;
        rvp3.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    }
    // 4th div
    if (imgNum4 == imgArray4.length - 1) {
        imgNum4 = 0
        rv4.src = imgArray4[imgNum4].link
        rvh4.innerText = imgArray4[imgNum4].head;
        rvp4.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    } else {
        imgNum4++
        rv4.src = imgArray4[imgNum4].link
        rvh4.innerText = imgArray4[imgNum4].head;
        rvp4.innerText = imgArray4[imgNum4].para;
        console.log(imgNum4)
    }


    imgNum4 = bag
})

// Community Posts
let image5 = document.querySelectorAll(".cp")
let cp1 = image5[0]
let cp2 = image5[1]
let cp3 = image5[2]
let cp4 = image5[3]

let imgNum5 = 0;
let imgArray5 = [
    "https://cdn.modesens.com/umedia/1587542s?w=400&",
    "https://cdn.modesens.com/umedia/1593167s?w=400&",
    "https://cdn.modesens.com/umedia/1592136s?w=400&",
    "https://cdn.modesens.com/umedia/1587648s?w=400&",
    "https://cdn.modesens.com/umedia/14180s?w=400&",//5
    "https://cdn.modesens.com/umedia/1583751s?w=400&",
    "https://cdn.modesens.com/umedia/1580264s?w=400&",
    "https://cdn.modesens.com/umedia/1572505s?w=400&",
    "https://cdn.modesens.com/umedia/1567811s?w=400&",
    "https://cdn.modesens.com/umedia/1567328s?w=400&",
    "https://cdn.modesens.com/umedia/1564720s?w=400&",
    "https://cdn.modesens.com/umedia/1561699s?w=400&"
]

let button5 = document.querySelectorAll(".post")

button5[0].addEventListener("click", function () {
    if (imgNum5 === 0) {
        imgNum5 = imgArray5.length - 1;
    } else {
        imgNum5--

    }
    let bag = imgNum5;
    cp1.src = imgArray5[imgNum5]

    console.log(imgNum5)
    if (imgNum5 == imgArray5.length - 1) {
        imgNum5 = 0
        cp2.src = imgArray5[imgNum5]
        console.log(imgNum5)
    } else {
        imgNum5++
        cp2.src = imgArray5[imgNum5]
        console.log(imgNum5)
    }
    if (imgNum5 === imgArray5.length - 1) {
        imgNum5 = 0
        cp3.src = imgArray5[imgNum5]
        console.log(imgNum5)
    } else {
        imgNum5++
        cp3.src = imgArray5[imgNum5]
        console.log(imgNum5)
    }

    if (imgNum5 == imgArray5.length - 1) {
        imgNum5 = 0
        cp4.src = imgArray5[imgNum5]
        console.log(imgNum5)
    } else {
        imgNum5++
        cp4.src = imgArray5[imgNum5]
        console.log(imgNum5)
    }
    imgNum5 = bag
})

button5[1].addEventListener('click', function () {

    if (imgNum5 >= imgArray5.length - 1) {
        imgNum5 = 0;
        console.log(imgNum5)
    } else {
        imgNum5++
        console.log(imgNum5)
    }
    let bag = imgNum5;
    cp1.src = imgArray5[imgNum5]

    if (imgNum5 == imgArray5.length - 1) {
        imgNum5 = 0
        cp2.src = imgArray5[imgNum5]
        console.log(imgNum5)
        imgNum5 = 0;
    } else {
        imgNum5++
        cp2.src = imgArray5[imgNum5]
        console.log(imgNum5)

    }

    if (imgNum5 == imgArray5.length - 1) {
        imgNum5 = 0
        cp3.src = imgArray5[imgNum5]
    } else {
        imgNum5++
        cp3.src = imgArray5[imgNum5]
    }

    if (imgNum5 == imgArray5.length - 1) {
        imgNum5 = 0
        cp4.src = imgArray5[imgNum5]
    } else {
        imgNum5++
        cp4.src = imgArray5[imgNum5]
    }

    imgNum5 = bag
})







