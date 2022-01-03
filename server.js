const express = require ("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());