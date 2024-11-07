import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
		unique: true,
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
			day: { type: String, required: true },
			from: { type: String, required: true },
			to: { type: String, required: true },
		},
	],
});

const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

export default Doctor;
