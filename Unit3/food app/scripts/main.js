async function getData(url){
    try{

 // let input_value= document.getElementById("search-bar").value;

 let res= await fetch (url);

 let data =await res.json();
  return (data);

  }
    catch(err){
    console.log(err);
    }
}



 function appendDetails(data,parent){

for(var i=0;i<data.length;i++){


    data.forEach(element => {


      
        let div1 =document.createElement("div");
        div1.setAttribute("id","fdiv")
       
        let img= document.createElement("img");
        img.src=element.strMealThumb;
       
        div1.append(img);


        let div2=document.createElement("div");
        div2.setAttribute("id","sdiv")

        let name= document.createElement("h2");
        name.innerText=element.strMeal;

        let description=document.createElement("p");
        description.innerText=element.strInstructions;

          
        div2.append(name,description);
        
       
        parent.append(div1,div2);
  })
}
 
}



export { getData ,appendDetails }