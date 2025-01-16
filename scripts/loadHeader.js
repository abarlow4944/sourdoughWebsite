document.addEventListener("DOMContentLoaded", () => {
    fetch('./header.html') // Retrieve header file
        .then(response => response.text()) // Convert response to text
        .then(data => {
            // Insert the header into the placeholder
            document.getElementById('headerPlaceholder').innerHTML = data;
            document.body.classList.remove('hidden'); // Show the page content

            

            // Sticky navbar logic
            const navBar = document.getElementById('stickyNav');
            const header = document.getElementById('siteHeader');
            const headerHeight = header.offsetHeight;
            const navBarHeight = navBar.offsetHeight;

            // Create a placeholder for the navbar
            const navBarPlaceholder = document.createElement('div');
            navBarPlaceholder.style.height = `${navBarHeight}px`;
            navBarPlaceholder.style.display = 'none'; // Initially hidden
            navBar.parentNode.insertBefore(navBarPlaceholder, navBar);

            window.addEventListener('scroll', () => {
                if (window.scrollY >= headerHeight) {
                    navBar.classList.add('fixed');
                    navBarPlaceholder.style.display = 'block'; // Show placeholder
                } else {
                    navBar.classList.remove('fixed');
                    navBarPlaceholder.style.display = 'none'; // Hide placeholder
                }
            });
        })
        .catch(error => console.error('Error loading header:', error)); // Handle errors
});
