// const backendURL = "https://alicias-guide-to-sourdough.onrender.com";

// async function searchRecipes(){
//     const query = document.getElementById("searchInput").value; //the search input 
//     const dietFilter = document.getElementById("dietFilter").value; //the diet filter
//     const starterAmount = document.getElementById.apply("starterAmount").value; // the starter amount

//     //build the url that will be sent to the backend
//     const url = `${backendURL}/recipeSearch?query=${query}&vegetarian=${dietFilter == "vegetarian"}&vegan=${dietFilter == "vegan"}&glutenFree=${dietFilter == "glutenFree"}&starterAmount=${starterAmount}`;

//     //fetch data from backend
//     try {
//         const response = await fetch(url); //send request to backend and fetch response
//         const recipes = await response.json(); //convert response into json
//         displayResults(recipes);
//     } catch(error) {
//         console.error("Error fetching recipes: ", error);
//     }
// }

// function displayResults(recipes){
//     const resultsContainer = document.getElementById("results");
//     resultsContainer.innerHTML = "";
// }