// Using native drivers -- Good for high level control of the connection

/*const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "FruitsDB";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("fruits");

  // Insertion --
  //   const insertResult = await collection.insertMany([
  //     {
  //         name: "Apple",
  //         score: 7,
  //         review: "Healthy fruit"

  //     },
  //     {
  //         name: "Kiwi",
  //         score: 8,
  //         review: "Cute fruit"

  //     },
  //     {
  //         name: "Passionfruit",
  //         score: 9,
  //         review: "Sweet and pretty fruit"

  //     }]);
  //   console.log('Inserted fruits =>', insertResult);

  // Searching -- 
  const findResult = await collection.find({}).toArray();
    console.log('Found fruits =>', findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
 
*/

// Mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is req"],
  },
  // Valdations
  score: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Mongoose will change "Fruit" to "Fruits" (the collection name)
const Fruit = mongoose.model("Fruit", fruitSchema);

let fruit = new Fruit({
  //name: "Guava",
  score: 3,
  review: "Bleh",
});

//fruit.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 8,
  review: "Cute fruit",
});

const passionFruit = new Fruit({
  name: "Passionfruit",
  score: 9,
  review: "Sweet and pretty fruit",
});

// Fruit.insertMany([kiwi, passionFruit]).then(function () {
//     console.log("Successfully saved default items to DB");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // Adding relationship with fruit
  favFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Meg",
  age: 24,
  favFruit: passionFruit
});

//person.save();

// Find -------

// Fruit.find().then((fruits) => {
//     //console.log(fruits);
//     fruits.forEach(function(fruit) {
//         console.log(fruit.name);
//         mongoose.connection.close();
//     });
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// Update ------

// Fruit.updateOne({ _id: "64b28ecc10441750e7b34d40" }, { name: "Peach" })
//   .then((fruits) => {
//     console.log("Updated");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Deletion-----

// Fruit.deleteOne({ _id: "64b28ecc10441750e7b34d40" })
//   .then((fruits) => {
//     console.log("Deleted");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Person.deleteMany({ name: "Meg", age: {$gt: 18} })
//   .then((fruits) => {
//     console.log("All Deleted");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
