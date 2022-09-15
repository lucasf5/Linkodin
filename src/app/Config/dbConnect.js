// import mongoose from "mongoose";
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Lucas:123@programaodin.p6ez2.mongodb.net/Cadastro");

const db = mongoose.connection;

module.exports = db;