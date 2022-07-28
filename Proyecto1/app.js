require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

/*var bodyParser = require('body-parser');
app.use(bodyParser.json());*/

const PORT = process.env.PORT || 3000;
const time = 5000;

const CACHE = {};

app.use(cors());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/cache", async function (req, res) {
  res.json({ data: CACHE });
});

app.post("/pokemon/", async function (req, res) {
  var pokeball = req.body.pokemon;
  console.log(req.body.pokemon);
  const  name  = pokeball;
 
  if (CACHE[name]) {
    return res.json({ data: CACHE[name].App.handlers.pokemonFinderFormOnSubmit, isCached: true });
    

  }
  let responseData;
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );
    responseData = data;
  } catch (error) {
    responseData = { error: error.toString(), name };
  }
  CACHE[name] = responseData;
  res.send({ data: responseData, isCached: false });
});


app.listen(PORT, () => {
  console.log(`El servidor está ejecutando en el puerto ${PORT}.`);
});