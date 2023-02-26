const express = require("express");
const app = express();
const mongoose = require("mongoose");


const PORT = 4000;

// データベースを接続
mongoose.connect(
    "mongodb+srv://nagamura:abc@cluster0.3arlzyk.mongodb.net/?retryWrites=true&w=majority"
)
    .then(() => console.log("データベースに接続されました"))
    .catch((err) => console.log(err));;
;


app.listen(PORT, () => {
    console.log("サーバー起動");
})

app.get("/", (req, res) => {
    res.send("root");
})



