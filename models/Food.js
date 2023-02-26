const mongoose = require("mongoose");

//DBスキーマを設定する（DBの設計）
const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,//入力されていないとエラーになる
        trim: true,//空白があると削除
        lowercase: true //小文字になる
    },
    calories: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("マイナスのカロリーは存在しません");
        },
    },
})

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;