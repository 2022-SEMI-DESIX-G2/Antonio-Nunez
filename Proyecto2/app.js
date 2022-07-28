require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');


const { PokemonModel } = require("./models");

/* var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());*/

const {
  PORT = 3000,
  MONGODB_URI = "mongodb://127.0.0.1:27017/pokemon",
} = process.env;

const app = express();
const db = mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const CACHE = {};

app.use(cors());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/cache", async function (req, res) {
  res.json({ data: CACHE });
});

app.post("/pokemon/:name", async function (req, res) {
  const { name } = req.params;
  const pokemon = await PokemonModel.find({ name });
  res.json({ pokemon, count: pokemon.length });
  
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

app.post("/pokemon/:name_or_id", async (req, res) => {
  const { name_or_id } = req.params;
  let pokemonRead = await PokemonModel.find({ name: name_or_id });
  if (pokemonRead.length) {
    return res.json({ pokemon: pokemonRead[0], isCached: true });
  }
  pokemonRead = await PokemonModel.find({ id: name_or_id });
  if (pokemonRead.length) {
    return res.json({ pokemon: pokemonRead[0], isCached: true });
  }
  const {
    data: { id, name, abilities, sprites, types },
  } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name_or_id}`);
  const pokemonCreated = await PokemonModel.create({
    id,
    name,
    abilities,
    sprites,
    types,
  });
  res.json({ pokemon: pokemonCreated, isCached: false });
});

db.then(() => {
  console.log("Conectado a la base de datos...");
  app.listen(PORT, () => {
    console.log(`Iniciando en el puerto: ${PORT}`);
  });
}).catch((error) => {
  console.error({ error });
});
