// for the accordion FAQ 

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".faqMenu li"); //the various menu topics
    const faqSections = document.querySelectorAll(".faqSection"); //the faq sections for each menu topic

    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", () => { //if a menu item is clicked
            faqSections.forEach(section => section.classList.remove("active")); //hide each faq section
            menuItems.forEach(mi => mi.classList.remove("active")); //remove the brown colour from each button

            const topic = menuItem.dataset.topic; //get the data-topic value of the selected menuItem
            document.getElementById(topic).classList.add("active"); //show the faqContent of the selected menuItem
            menuItem.classList.add("active");
        });
    });


    const accordions = document.querySelectorAll(".accordion");
    
    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const panel = accordion.nextElementSibling;
            const arrow = accordion.querySelector(".arrow");

            panel.classList.toggle("active"); //show/remove answer when clicked
            arrow.classList.toggle("rotate"); 
        });
    });
});