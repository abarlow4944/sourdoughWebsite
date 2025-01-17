// for loading the header/nav bar on every page, keeping the nav bar at the top of the screen even when scrolling

document.addEventListener("DOMContentLoaded", () => {
    fetch('./header.html') // retrieve header file
        .then(response => response.text()) // convert response to text
        .then(data => {
            // insert the header into the placeholder
            document.getElementById('headerPlaceholder').innerHTML = data;
            document.body.classList.remove('hidden'); // show the page content 

            // for the sticky nav bar
            const navBar = document.getElementById('stickyNav');
            const header = document.getElementById('siteHeader');

            //height of header and nav bar
            const headerHeight = header.offsetHeight; 
            const navBarHeight = navBar.offsetHeight;

            // Create a placeholder for the navbar
            const navBarPlaceholder = document.createElement('div');
            navBarPlaceholder.style.height = `${navBarHeight}px`;
            navBarPlaceholder.style.display = 'none'; // initially hidden
            navBar.parentNode.insertBefore(navBarPlaceholder, navBar);

            //scroll event listener
            window.addEventListener('scroll', () => {
                if (window.scrollY >= headerHeight) { //if scrolled past the header height
                    navBar.classList.add('fixed'); //make the nav bar fixed
                    navBarPlaceholder.style.display = 'block'; // Show placeholder
                } else {
                    navBar.classList.remove('fixed'); //nav bar not fixed
                    navBarPlaceholder.style.display = 'none'; // Hide placeholder
                }
            });
        })
        .catch(error => console.error('Error loading header:', error)); // Handle errors
});
