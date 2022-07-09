document.querySelector("form").addEventListener("submit",order);


function order(event){
  event.preventDefault();
 
//  var name=document.getElementById("name").value;
//  var number=document.getElementById("number").value;
//  var address=document.getElementById("address").value;

 alert("your order is accepted");
  setTimeout(function(){
    alert(" your order is being cooked");
  }, 3000);

  setTimeout(function(){
    alert(" your order is ready");
  }, 8000);


  setTimeout(function(){
    alert(" order out for delivery");
  }, 10000);

  setTimeout(function(){
    alert(" order delivered");
  }, 12000);


}