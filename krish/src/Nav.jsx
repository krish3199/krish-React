import React from 'react'

export const Nav = () => {
  return (
   <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">MyLogo</div>
      <button class="menu-btn" id="menuBtn">&#9776;</button>
      <div class="nav-links" id="navLinks">
        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </nav>
  )
}
