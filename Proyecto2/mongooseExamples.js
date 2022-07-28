const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/pokemon";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  name: String,
});

// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

(async () => {
  try {
    const instance = await SomeModel.create({
      asdioasdoiajsdoji: "also_awesome",
    });
    console.log({ instance });
    const read = await SomeModel.find({ name: "also_awesome" });
    console.log({ read });
  } catch (error) {
    console.log({ error });
  }
})();
