import React from "react";
import $ from "jquery";

export default function Navigation() {
 $(document).ready(function () {
  $(".header__burger").click(function (event) {
   $(".header__burger, .header__menu").toggleClass("active");
   $("body").toggleClass("lock");
  });
 });
 $(document).ready(function () {
  $(".header__link").click(function (event) {
   $(".header__link").removeClass("currentlyActive");
   $(this).toggleClass("currentlyActive");
  });
 });
 return (
  <div className="wrapper">
   <header className="header">
    <div className="container">
     <div className="header__body">
      <a href="/" className="header__logo">
       <img src={require("../images/logos.png")} alt="logo" />
      </a>
      <div className="header__burger">
       <span></span>
      </div>
      <nav className="header__menu">
       <ul className="header__list">
        <li>
         <a href="/" className="header__link">
          Home
         </a>
        </li>
        <li>
         <a href="/about" className="header__link">
          About me
         </a>
        </li>
        <li>
         <a href="/contact" className="header__link">
          Contact
         </a>
        </li>
       </ul>
      </nav>
     </div>
    </div>
   </header>
  </div>
 );
}
