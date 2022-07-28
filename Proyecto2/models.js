const mongoose = require("mongoose");

const PokemonModelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  abilities: Array,
  types: Array,
  sprites: Object,
});

module.exports = {
  PokemonModel: mongoose.model("PokemonModel", PokemonModelSchema),
};
