import mongoose from "mongoose";

async function ConnectionDB () {
    await mongoose.connect("mongodb://localhost:27017/mydb")

    const schema = mongoose.Schema({
        name: String,
        age: Number,
        city: String,
        email : String
    })

    const userModel = mongoose.model("users", schema)
    const result = await userModel.find();
    console.log(result);
}

ConnectionDB()