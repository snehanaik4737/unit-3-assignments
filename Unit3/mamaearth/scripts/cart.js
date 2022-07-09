
let parent =document.getElementById("payment-cont");
parent.innerHTML=upi_show();



document.getElementById("UPI").addEventListener("click",upi);
document.getElementById("credit").addEventListener("click",credit);



function upi(){
    document.getElementById("payment-cont").innerHTML= upi_show();

}
function credit(){
    document.getElementById("payment-cont").innerHTML= credit_show();

}

function  upi_show(){
    return `<p>Pay Using UPI ID</p>
    <!-- <div> Applied : Extra 5% Off with Your Order</div>  -->
    <h3>Enter UPI ID  (Google Pay, BHIM, PhonePe & more)</h3>
    <input type="text" id="upi-id" placeholder="Enter your UPI Id">
    <button id="upi-order"> PLACE ORDER</button>
    <div id="check">
        <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
       <h4>100% Payment Protection, Easy Return Policy</h4>
       </div>
       <div id="visa">
       <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
       <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
       </div>`
}



 function credit_show(){
     return `<p>Pay Using Credit Or Debit Cards</p>

     <input type="number" id="numbercard"placeholder="Card Number">
     <input type="text" id="MM" placeholder="MM/YY">
     <input type="password" id="CVV" placeholder="CVV">
     <input type="text" id="name" placeholder="Name on the card">
     <button id="upi-order"> PLACE ORDER</button>
     <div id="check">
         <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
        <h4>100% Payment Protection, Easy Return Policy</h4>
        </div>
        <div id="visa">
        <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
        <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
        </div> 
     `
 }

