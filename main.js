var btn = document.getElementById("red-button");
var circle = document.getElementById("circle");

btn.onclick = (e) => {
    e.preventDefault();
    
    circle.classList.toggle("animate-circle");
    btn.classList.toggle("animate-btn");
    setTimeout(() => {
        circle.classList.toggle("animate-circle");
    }, 1000);
    setTimeout(() => {
        btn.classList.toggle("animate-btn");
    }, 500);
};
