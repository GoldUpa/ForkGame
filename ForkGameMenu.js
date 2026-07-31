"use strict";
const Manuel = document.getElementById("FAQ");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const Mobile = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", function(){
    Mobile.classList.toggle("active")
});