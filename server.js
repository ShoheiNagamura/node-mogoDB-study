const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 4000;

app.listen(PORT, () => {
    console.log("サーバー起動");
})

app.get("/", (req, res) => {
    res.send("root");
})

