const { MongoClient } = require("mongodb");
const assert = require("assert");
const bodyParser = require("body-parser");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//////////////////////////////////////////////////////
/////////////////////// ABOUT ////////////////////////
//////////////////////////////////////////////////////

const createAboutText = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("about").insertOne(req.body);

    res.status(201).json({
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

    res.status(200).json({
      status: 200,
      message: "About text data retrieved",
      data: result,
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

const editAboutText = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  console.log(req.body.content);

  const newValue = { $set: { ...req.body } };

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db
      .collection("about")
      .updateOne({ _id: "text1" }, newValue);

    res.status(200).json({
      status: 200,
      message: "About text data has been edited",
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message1: "failed to edit",
      message2: err.message,
    });
  }

  client.close();
};
//////////////////////////////////////////////////////
/////////////////////// ABOUT ////////////////////////
/////////////////////// ARTISTS ////////////////////////
//////////////////////////////////////////////////////

const getArtistsContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("artists").find().toArray();

    res.status(200).json({
      status: 200,
      message: "Artists data retrieved",
      data: result,
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

const addArtistContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("artists").insertOne(req.body);

    assert.equal(1, result.insertedCount);

    res.status(201).json({
      status: 201,
      data: req.body,
      message: "The artist has been added!",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: err.message,
    });
  }
};

const editArtistContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const id = req.params;

  let bodyObject = { ...req.body };

  const newValues = { $set: { ...bodyObject } };

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const results = await db.collection("artists").updateOne(id, newValues);

    assert.equal(1, results.matchedCount);
    // assert.equal(1, results.modifiedCount);

    res.status(200).json({
      status: 200,
      message: "Artist has been successfully modified!",
      id,
      ...req.body,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "failure",
      messsage1: err.message,
    });
  }

  await client.close();
};

const deleteArtistContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const id = req.params;

  console.log(id);

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("artists").deleteOne(id);

    assert.equal(1, result.deletedCount);

    res.status(204).json({
      status: 204,
      data: result,
      message: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "failure",
      message1: err.message,
    });
  }

  await client.close();
};
//////////////////////////////////////////////////////
/////////////////////// ARTISTS ////////////////////////
/////////////////////// RELEASES ////////////////////////
//////////////////////////////////////////////////////

const getReleasesContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("releases").find().toArray();

    res.status(200).json({
      status: 200,
      message: "Releases data retrieved",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 404,
      message1: "data not found",
      message2: err.message,
    });
  }
  client.close();
};

const addReleasesContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("releases").insertOne(req.body);

    res.status(201).json({
      status: 201,
      data: req.body,
      message: "The release has been added!",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: err.message,
    });
  }
};

const editReleaseContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const id = req.params;
  const query = { id };

  let bodyObject = { ...req.body };

  const newValues = { $set: { ...bodyObject } };

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const results = await db.collection("releases").updateOne(id, newValues);

    assert.equal(1, results.matchedCount);
    assert.equal(1, results.modifiedCount);

    res.status(200).json({
      status: 200,
      message: "Release has been successfully modified!",
      id,
      ...req.body,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "failure",
      messsage1: err.message,
    });
  }

  await client.close();
};

const deleteReleaseContent = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const id = req.params.id;

  try {
    await client.connect();

    const db = await client.db("alpaka");

    const result = await db.collection("releases").deleteOne({ id });

    res.status(204).json({
      status: 204,
      data: result,
      message: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "failure",
    });
  }

  await client.close();
};

//////////////////////////////////////////////////////
/////////////////////// RELEASES ////////////////////////
//////////////////////////////////////////////////////

module.exports = {
  createAboutText,
  getAboutText,
  editAboutText,
  getArtistsContent,
  addArtistContent,
  editArtistContent,
  deleteArtistContent,
  getReleasesContent,
  addReleasesContent,
  editReleaseContent,
  deleteReleaseContent,
};
