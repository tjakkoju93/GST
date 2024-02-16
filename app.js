function navchange() {

    let burgerMenu = document.querySelector(".burgerMenu");

    let burger = document.querySelector(".burger")

    burger.addEventListener("click", () => {
        burgerMenu.classList.toggle("nav-active");

        burger.classList.toggle("toggle");
    })
}

function calculator() {

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    // let invoiceDetails =document.querySelector(".invoiceDetails");
    // let uname=document.createElement('p');

    document.getElementById("user").innerHTML = `User Name : ${name}`;
    document.getElementById("add").innerHTML = `Address : ${address}`;
    document.getElementById("mail").innerHTML = `Email : ${email}`;
    document.getElementById("phone").innerHTML = `Contact Number : ${contact}`;

    // let add=document.createElement('p');
    // add.innerHTML =address;
    // invoiceDetails.appendChild(add);
    // let mail=document.createElement('p');
    // mail.innerHTML =email;
    // invoiceDetails.appendChild(mail);
    // let phone=document.createElement('p');
    // phone.innerHTML =contact;
    // invoiceDetails.appendChild(phone);


    let biryani = document.getElementById("biryani").value;
    let soup = document.getElementById("soup").value;
    let pulao = document.getElementById("pulao").value;
    let pasta = document.getElementById("pasta").value;
    let drink = document.getElementById("drink").value;
    // let gst = document.getElementById("gst").value; 
    let tip = document.getElementById("tip").value;


    // let item1=document.createElement('p');
    // item1.innerHTML=biryani;
    // invoiceDetails.appendChild(item1);
    // let item2=document.createElement('p');
    // item2.innerHTML=soup;
    // invoiceDetails.appendChild(item2);
    // let item3=document.createElement('p');
    // item3.innerHTML=pulao;
    // invoiceDetails.appendChild(item3);
    // let item4=document.createElement('p');
    // item4.innerHTML=pasta;
    // invoiceDetails.appendChild(item4);
    // let item5=document.createElement('p');
    // item5.innerHTML=drink;
    // invoiceDetails.appendChild(item5);

    document.getElementById("item1").innerHTML = `Biryani : ${biryani}`;
    document.getElementById("item2").innerHTML = `Soup : ${soup}`;
    document.getElementById("item3").innerHTML = `Pulao : ${pulao}`;
    document.getElementById("item4").innerHTML = `Pasta : ${pasta}`;
    document.getElementById("item5").innerHTML = `Bewerages : ${drink}`;
    document.getElementById("item6").innerHTML = `Tip : ${tip}`;


    // let qty1 = document.getElementById("qty1").value;   
    // let qty2 = document.getElementById("qty2").value;  
    // let qty3 = document.getElementById("qty3").value;  
    // let qty4 = document.getElementById("qty4").value;  
    // let qty5 = document.getElementById("qty5").value;  

    // let sumArr = [(biryani),(soup),(pulao),(pasta),(drink)];
    let sumArr = [parseInt(biryani), parseInt(soup), parseInt(pulao), parseInt(pasta), parseInt(drink)];
    // let quantity =[parseInt(qty1),parseInt(qty2),parseInt(qty3),parseInt(qty4),parseInt(qty5)];
    // let sumArr = [isNaN(biryani),isNaN(soup),isNaN(pulao),isNaN(pasta),isNaN(drink)];
    let sum = 0;

    for (let i = 0; i < sumArr.length; i++) {

        sum = sum + (sumArr[i]);

    }


    let gst = sum * 18 / 100;
    console.log(gst)
    let tips = gst + sum + parseInt(tip);
    console.log(tips)

    document.getElementById("bill").innerHTML = `Bill Amount : ${sum}`;
    document.getElementById("gst").innerHTML = `GST(18%) Bill Amount : ${sum + gst}`;
    document.getElementById("tips").innerHTML = `GST Bill with Tip : ${tips}`;

}



navchange();
