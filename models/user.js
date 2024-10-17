import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	nationality: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
		unique: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
