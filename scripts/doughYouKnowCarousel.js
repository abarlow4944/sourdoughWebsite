// for the carousel feature under the Dough You Know Sourdough section on the homepage

document.addEventListener("DOMContentLoaded", function() {
    // find the necessary elements
    const items = document.querySelectorAll(".carouselItem");
    const prevButton = document.querySelector(".carouselButton.prev");
    const nextButton = document.querySelector(".carouselButton.next");

    let currentIndex = 0; // keeps track of which benefit is being displayed

    function showItem(index) {
        items.forEach((item, i) => { // go through every item
            if(i == index){ //if the item matches the one we want to display
                item.classList.add("active"); //make it active
            }
            else{
                item.classList.remove("active"); //make it not active
            }
        });
    }

    prevButton.addEventListener("click", () => { // if the prev button is clicked
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop backward
        showItem(currentIndex);
    });

    nextButton.addEventListener("click", () => { // if the next button is clicked
        currentIndex = (currentIndex + 1) % items.length; // Loop forward
        showItem(currentIndex);
    });

    // Initialize the first item
    showItem(currentIndex);
});
