"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const PORT = 4000;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(cors())

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you were looking for.",
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
