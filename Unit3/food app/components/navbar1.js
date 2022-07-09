function navbar(){

    return ` <div id="navbar">

   
    <img src="./foodicon.png" alt="" id="logo" >

  
<div class="search-box">
    <input type="text" id="search-bar" placeholder="search">
    <button id="search-btn">
        <img src="search.png" alt="">
    </button>
</div>

<div class="side-bars">

    <a href="index.html" class="links">Home</a>
    <a href="latest.html" class="links">Latest</a>
    <a href="#" class="links">Sign Up</a>
    
    </div>
    <div class="options">
    
        <!-- <img src="./grid2.png" alt="" class="icons">
     -->
        <div class="profile">
            <img src="./profile.png" alt="">
        </div>
    </div>
</div>`;
  
  }
  
  export { navbar } ;
  