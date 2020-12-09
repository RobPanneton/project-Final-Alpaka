"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const {
  createAboutText,
  getAboutText,
  editAboutText,
  getArtistsContent,
  addArtistContent,
  getReleasesContent,
  addReleasesContent,
} = require("./handlers/handlers-index");

const PORT = 4000;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors())
  .use("/", express.static(__dirname + "/"))

  .post("/api/about/add-text", createAboutText)

  .get("/api/about/get-text", getAboutText)

  .post("/api/about/edit-text", editAboutText)

  .get("/api/artists/get-content", getArtistsContent)

  .post("/api/artists/add-artist", addArtistContent)

  .get("/api/releases/get-content", getReleasesContent)

  .post("/api/releases/add-release", addReleasesContent)

  //////////////////////////////////

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you were looking for.",
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
