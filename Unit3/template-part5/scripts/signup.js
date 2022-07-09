  document.querySelector("form").addEventListener("submit",formSubmit);
  var userStack=JSON.parse(localStorage.getItem("userDataBase"))|| [];

function formSubmit(event){
event.preventDefault();

var email=document.querySelector("#email").value;
var pass=document.querySelector("#pass").value;
var user=document.querySelector("#user").value;
var mbl =document.querySelector("#mbl").value;

if(email =="" || pass=="" || user=="" || mbl==""){
         alert("error")
     }
else{
 function info(N,M,K,S){
     this.email= N;
     this.pass=M;
     this.user=K;
     this.mbl=S;
 }
 let information = new info(email,pass,user,mbl);

 userStack.push(information);
 localStorage.setItem("userDataBase",JSON.stringify(userStack));
 alert("signup success");


window.location.href="login.html"
}
}