const hamburger = document.querySelector("#hamburger");
const button = document.querySelector("#close-button");



hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    const menu = document.getElementById("#close-button");
    const fm = document.getElementsByClassName("float-menu");
    for (var i = 0; i < fm.length; i++) {
        fm[i].style.display="block";
        
    } 
}); 
button.addEventListener("click", function(closeMenu) {
    const menu = document.getElementById("#close-button");
    const fm = document.getElementsByClassName("float-menu");
    for (var i = 0; i < fm.length; i++) {
        fm[i].style.display="none";
    }
});

