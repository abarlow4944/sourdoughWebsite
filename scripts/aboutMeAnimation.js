// for the images sliding up in the About Me section of the homepage

document.addEventListener("DOMContentLoaded", function() { // wait for HTML content to load
    // elements we want to animate
    const aboutMeSection = document.querySelector(".aboutMe");
    const images = document.querySelectorAll(".circleImage"); //get all images
    

    const observer = new IntersectionObserver( //observes when elements come into view
        // the callback function
        (entries, observer) => { // entries is a list of elements observer is watching
            
            entries.forEach(entry => { //check every entry
                if (entry.isIntersecting) { //if About Me is visible in the browser window, animation starts
                    images.forEach((image, index) => { // for each image
                        image.style.animation = `slideUp 1s ease-out ${index * 0.8}s forwards`; //do the slide up animation
                    });
                    observer.unobserve(entry.target); // Stop observing target after animation starts
                }
            });
        },
        // option for when the observer should trigger
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(aboutMeSection); // start observing the About Me section
});
