const express = require ("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());
app.use(cors());

const {URL} = process.env;

mongoose.connect(URL)
    .then(() => {console.log('Connected to the database')})
    .catch((error) => {console.log('Not connected to the database -error occurred', error)})

app.listen(port, () => {
    console.log(`The server 🙈 is listening on port ${port}`);
});