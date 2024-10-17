import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	specialty: {
		type: String,
		required: true,
	},
	clinic: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	totalReviews: {
		type: Number,
		default: 1025,
	},
	image: {
		type: String,
		default: "/doctor-1.png",
	},
	schedule: [
		{
			day: String, // e.g., "اليوم", "غداً"
			date: String, // e.g., "1/8"
			times: [String], // e.g., ["1:00م", "2:00م"]
		},
	],
});

const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

export default Doctor;
