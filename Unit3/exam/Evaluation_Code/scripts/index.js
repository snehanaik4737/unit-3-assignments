async function getData(){


    try{

      let url= "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
      let res = await fetch(url);
      let data= await res.json();
       appendfood(data);
     // console.log(data);
    }
    catch(err){
      console.log("err",err);
    }
   }
   getData();




   function appendfood(data){

   

   document.getElementById("menu").innerHTML="";


   data.meals.map(function(elem){
   
    var div= document.createElement("div");


    var div1= document.createElement("div");
    div1.setAttribute("id","flex");
    var img= document.createElement("img");
    img.src= elem.strMealThumb;
   // console.log(img);
    div1.append(img);
     var para= document.createElement("p");
     para.textContent="Dish-Name:" +elem.strMeal;
   //  console.log(para);

   let x=Math.round(Math.random()*500);
   var price = document.createElement("p");
   price.textContent ="Price: Rs. "+x; 
    console.log(price);

  var cart= document.createElement("button");
  cart.textContent="ADD TO CART";
  cart.onclick=function(event){
      addtocart(elem,x);
  }

    div.append(div1,para,price,cart);
    document.getElementById("menu").append(div);


   })


   }

  let cart = localStorage.getItem("cart");
  if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
    refreshCartCount(cart);
  }
  else{
    cart=JSON.parse(cart);
    refreshCartCount(cart);
  }

  function  refreshCartCount(cart){
    let cartCount= document.getElementById("count");
      cartCount.textContent="Cart-counts"+cart.length;
    
  }

  function addtocart(elem,x){

    elem.price=x;
      console.log("elem:",elem);
    let cart =JSON.parse(localStorage.getItem("cart"));

    cart.push(elem);
 //cart.push(price);
    localStorage.setItem("cart",JSON.stringify(cart));

    refreshCartCount(cart);
  }

  