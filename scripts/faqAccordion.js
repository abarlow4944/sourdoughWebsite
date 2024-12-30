// for the accordion FAQ 

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
    
    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const panel = accordion.nextElementSibling;
            const arrow = accordion.querySelector(".arrow");

            panel.classList.toggle("active"); //show/remove answer when clicked
            arrow.classList.toggle("rotate");
            
        })
    });
});