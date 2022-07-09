 var imgArr=[{
     image:"https://wallpapercave.com/wp/wp6658919.jpg",
 },
 {
     image:"https://swall.teahub.io/photos/small/67-672336_hollywood-movies-wallpapers-hd-avatar-movie.jpg",
 },

 {
     image:"https://c4.wallpaperflare.com/wallpaper/315/1011/750/joker-joker-2019-movie-joaquin-phoenix-movies-hd-wallpaper-preview.jpg",

 },
 {
     image:"https://moviegalleri.net/wp-content/gallery/jai-bhim-first-look/Suriya-Jai-Bhim-Kannada-Movie-First-Look-Poster-HD.jpg",
 },
 {
     image:"https://swall.teahub.io/photos/small/190-1907588_harry-potter-and-the-deathly-hallows-game.jpg",
 },

]; 
  

var Movie=[{
    image:"https://images.saymedia-content.com/.image/t_share/MTc0NDEzMjg5NDIwMjM2NDIy/should-i-watch-inception.jpg",
    name:"INCEPTION",
    type:"Action,Crime,Drama",
    rating:"9.4",
},
{
    image:"https://assets.gadgets360cdn.com/pricee/assets/product/202201/the_kings_man_1642159444.jpg",
    name:"The Kings Man",
    type:"Action, Drama",
    rating: "9.2",
    
  },
  {
    image:"https://i.pinimg.com/736x/d4/86/0c/d4860cfecbbe2826d462294c61007371.jpg",
    name:"EXTRACTION",
    type:"Action, Crime",
    rating:"9.1",
    
  },

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwT0O0DHh6-QeOw6yRKmrxHOvZlGd5f8vHem7F8Ezkif4wD_-91ydEr0Xd7CEP7BHp1Yk&usqp=CAU",

    name:"The Lord Of The Rings",
    type:"Action,Crime,Drama",
    rating:"9.7",
    
  },

  {
    image:"https://filmfare.wwmindia.com/content/2021/aug/hollywood-action-movies-in-hindi-minority-report-51627886311.jpg",
    name:"TOM CRUISE",
    type:"Action,Crime,Drama",
    rating:"9.6",
    
  },

  {
    image:"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/01/03/171506-hollywood.jpg?itok=Oz1lgPOx",
    name:"AVENGERS",
    type:"Action,Crime,Drama",
    rating:"9.8",
    
  },

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEP0wRVCMr5bJ1HvK1RbCspgL_q4qXGIcVg&usqp=CAU",
    name:"AVATAR",
    type:"Action,Drama",
    rating:"9.5",
    
  },

  {
    image:"https://downloadmart.b-cdn.net/wp-content/uploads/2019/08/Hollywood-Movies-Releasing-In-August-2019.jpg",
    name:"FAST & FURIOUS",
    type:"Action,Drama",
    rating:"9.8",
    
  },
  {
    image:"https://www.scrolldroll.com/wp-content/uploads/2021/11/a-mighty-heart-hollywood-movies-shot-in-india.jpg",
    name:"A Mighty Heart",
    type:"Action,Drama",
    rating:"9.2",
    
  },

];
localStorage.setItem("movies",JSON.stringify(Movie));


   let slideshow_img =document.getElementById("show")
  
   let i=0;
   let x = setInterval(function(){
     if(i == imgArr.length){
 
        i=0;
     }
   
     slideshow_img.src=imgArr[i].image;
     i=i+1;
 }, 2000);




  
// function RatingSort(){
//     var selected=document.querySelector("#ratingSort").value;
//      if(selected=="high") {
//       Movie.sort(function(a,b){
//    return b.rating-a.rating;
//       });
//      }
//      if(selected=="low") {
//        Movie.sort(function(a,b){
//         return a.rating-b.rating; 
//        });
//    }
   
//     displayData(Movie);
//    }

//     displayData(Movie);

//   function displayData(Movie){
//     document.querySelector("#movies").innerHTML="";
//    Movie.map(function(elem){
//     document.querySelector("#show").innerHTML="";
//     let maindiv= document.createElement("div");
//     maindiv.setAttribute("id","flex");

//     let div1= document.createElement("div");
//     div1.setAttribute("id","fdiv");
//     var img=document.createElement("img");
//     img.setAttribute("id","image");
//      img.src= elem.image;
//     div1.append(img);

//     let div2= document.createElement("div");
//     div2.setAttribute("id","sdiv");
//     var para= document.createElement("p");
//     para.textContent= elem.name;
 
//     var type= document.createElement("p");
//     type.textContent=elem.type;

//     var rating= document.createElement("p");
//     rating.textContent=elem.rating;

//     div2.append(para,type,rating);

//     maindiv.append(div1,div2);
   
//     document.querySelector("#movies").append(maindiv);


// })
   
//   }