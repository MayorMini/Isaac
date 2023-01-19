import React from 'react'

import "./Navbar.css"

function Navbars() {
  return (
    <div className='container-fluid  position-relative' >
       <div class="position-absolute top-0 end-0" id="blur">
        
       </div>
       <div id='Main-Nav'>
<div>
    <p id='opensea'>Open Sea</p>
</div>
<div> 
    <input type="text" id='search' placeholder='Search'/>
</div>
<div id='links' >
    <ul id='sub-links'>
        <li> About Us</li>
        <li> Products</li>
        <li> FAQs</li>
        <li> Contact</li>
    </ul>
</div>
<div id='div-btn'>
    <button id='button'> Buy Now</button>
</div>
</div>
    {/* second */}
    <nav class="navbar navbar-expand-lg navbar-light" id='second-nav'>
  <div class="container">
    <a class="navbar-brand ms-3" href="http" >Open Sea</a>
   
    <form class="d-flex " id='hide'>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='hide'/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http"> Contact</a>
        </li>
        
    
        
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>

    ///second
    
  )
}

export default Navbars