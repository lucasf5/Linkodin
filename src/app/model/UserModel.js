const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;