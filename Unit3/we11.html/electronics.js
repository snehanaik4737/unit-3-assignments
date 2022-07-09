import navbar from "./components/navbar.js";

import {getData, appendData} from "./scripts/showdata.js" ;

let navbar_div= document.getElementById("navbar-cont");

navbar_div.innerHTML = navbar();


let url ="https://fakestoreapi.com/products/category/electronics";


 let res = await getData(url);

 console.log("res",res);
  
 let parent = document.getElementById("data");
 appendData(res, parent)
