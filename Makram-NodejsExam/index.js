const express = require("express");
const app = express();
const DB = require("./database").connectDB;

DB();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log('Listening on Port: ${process.env.PORT');
}); 