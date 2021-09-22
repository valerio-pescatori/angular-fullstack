import $clamp from "../node_modules/clamp-js/clamp.js";
// come cazzo se fa sto import
var btn = document.getElementById("red-button");
var circle = document.getElementById("circle");

btn.onclick = (e) => {
  e.preventDefault();

  circle.classList.toggle("animate-circle");
  btn.classList.toggle("animate-btn");
  setTimeout(() => {
    circle.classList.toggle("animate-circle");
    document.location.href = "shop";
  }, 1000);
  setTimeout(() => {
    btn.classList.toggle("animate-btn");
  }, 500);
};

document.onload = (e) => {
  var toBeClamped = document.getElementById("clamp-me");
  var clampThose = document.getElementsByClassName("card-title text-brea");

  $clamp(toBeClamped, { clamp: 2 });
  console.log("test");
  // clampThose.forEach((element) => {
  //   $clamp(element, { clamp: 2 });
  // });
};
