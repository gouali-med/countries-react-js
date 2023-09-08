import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

function Navbar() {
  return (
    
   <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">React App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="mx-auto order-0" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/GetCountries">Countries</NavLink>
      </li>
      <li className="nav-item active">
      <NavLink className="nav-link" activeClassName="active" to="/product">Products</NavLink>
      </li>

    </ul>
  </div>
</nav>
    </>

  )
}

export default Navbar
/*
const sideMenu=document.querySelector("aside");
const closeBtn=document.querySelector("#close-btn");

sideMenu.addEventListener('click',()=>{
    sideMenu.style.display=' block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display=' none';
})
*/