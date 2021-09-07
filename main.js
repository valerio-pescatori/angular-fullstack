var btn = document.getElementById("red-button");
var circle = document.getElementById("circle");

// calcolo la width iniziale
var w = btn.scrollWidth;
var h = btn.scrollHeight;
var fontSize = parseInt(window.getComputedStyle(btn, null).getPropertyValue("font-size"));


btn.onclick = (e) => {
    e.preventDefault();

    //animo il cerchio
    circle.style.width= "200px";
    circle.style.height= "200px";


    // disabilito la transizione
    let transition = btn.style.transition;
    btn.style.transition = "";
    // assegno la width calcolata all'elemento
    requestAnimationFrame(function(){
        btn.style.width = w + "px";
        btn.style.height = h + "px";
         // riattivo la transizione
        btn.style.transition = transition;

        requestAnimationFrame(function(){
            // modifico la width 
            btn.style.width = (w - (w/7)) + "px";
            btn.style.height = (h - (h/7)) + "px";
            btn.style.fontSize = (fontSize - 3) + "px";
        });
    });

    // torna normale
    setTimeout(() => {
        btn.style.width = w + "px";
        btn.style.height = h + "px";
        btn.style.fontSize = fontSize + "px";
    }, 200);


};
