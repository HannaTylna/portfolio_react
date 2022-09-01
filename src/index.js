import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import $ from "jquery";

const root = ReactDOM.createRoot(document.getElementById("root"));
$(document).ready(function () {
 $(".header__burger").click(function (event) {
  $(".header__burger, .header__menu").toggleClass("active");
  $("body").toggleClass("lock");
 });
});
$(document).ready(function () {
 $(".header__link").click(function (event) {
  // this removes the underline class from all other ".navigation" links.
  $(".header__link").removeClass("currentlyActive");

  // this makes the one that was clicked underlined
  $(this).addClass("currentlyActive");
 });
});

root.render(<App />);
