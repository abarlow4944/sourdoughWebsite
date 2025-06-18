// setting up the server
require("dotenv").config(); // load environment variables
const express = require("express"); // import express
const axios = require("axios"); // import axios for HTTP requests
const cors = require("cors"); // import CORS to allow frontend communication

const app = express(); // create an express app
const PORT = process.env.PORT || 3000; // define the port (3000 locally, or assigned by Render)
const API_KEY = process.env.SPOONACULAR_API_KEY; // get the API key

app.use(cors()); // allow frontend to talk to backend
app.listen(PORT, () => console.log(`App listening on port ${PORT}`)); //when the server starts, creates a log

//set up route
router.get("/recipeSearch", async (req, res) => {
    const { query, vegetarian, vegan, glutenFree, starterAmount } = req.query; //get query parameters

    const apiURL = `https://api.spoonacular.com/recipes/complexSearch`;
    const params = {
      apiKey: API_KEY,

    }

  });