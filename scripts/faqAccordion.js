// for the accordion FAQ 

document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelectorAll(".accordion");
    
    accordion.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const panel = accordion.nextElementSibling;
            const arrow = accordion.querySelector(".arrow");

            panel.classList.toggle("active"); //show/remove answer when clicked
            arrow.classList.toggle("rotate");
            
        })
    });
});