import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Lucas:123@programaodin.p6ez2.mongodb.net/Cadastro");

const db = mongoose.connection;

export default db;