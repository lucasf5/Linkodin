import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;