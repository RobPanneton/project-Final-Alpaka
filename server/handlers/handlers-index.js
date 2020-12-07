const { MongoClient } = require("mongodb");
const assert = require("assert");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createAboutText = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("about").insertOne(req.body);

    req.status(201).json({
      status: 201,
      message: "The about text has been successfully added!",
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: err.message,
    });
  }
  client.close();
};

const getAboutText = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("about").findOne({ _id: "text1" });

    console.log(result);

    res.status(200).json({
      status: 200,
      message: "About text data retreived",
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message1: "data not found",
      message2: err.message,
    });
  }

  client.close();
};
module.exports = {
  createAboutText,
  getAboutText,
};
