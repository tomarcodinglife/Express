import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    email : String
})

export default  userSchema;