import mongoose from "mongoose";
import userSchema from "../schema/userSchema.js";

const userModel = mongoose.model("users", userSchema);

// mongoDB Connection



export default userModel;