// for loading header and navigation bar onto every page


document.addEventListener("DOMContentLoaded", () => {
    fetch('../header.html') // retrieve header file
        .then(response => response.text()) // convert the response into plain text
        .then(data => { //put the data into headerPlaceholder
            document.getElementById('headerPlaceholder').innerHTML = data;
            document.body.classList.remove('hidden'); // show the rest of the content
        })
        .catch(error => console.error('Error loading header:', error)); // in case there is an error
});
