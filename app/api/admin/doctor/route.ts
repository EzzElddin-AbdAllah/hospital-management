import dbConnect from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { name, phone, specialty, clinic, price, schedule } =
			await req.json();

		if (
			!name ||
			!phone ||
			!specialty ||
			!clinic ||
			!price ||
			!Array.isArray(schedule)
		) {
			return NextResponse.json(
				{ error: "Missing required fields." },
				{ status: 400 }
			);
		}

		const isValidSchedule = schedule.every(
			(entry) =>
				entry.day && entry.from && entry.to && typeof entry.day === "string"
		);

		if (!isValidSchedule) {
			return NextResponse.json(
				{ error: "Invalid schedule format." },
				{ status: 400 }
			);
		}

		await dbConnect();

		schedule.forEach((i) => delete i._id);

		const newDoctor = new Doctor({
			name,
			phone,
			specialty,
			clinic,
			price,
			schedule,
		});

		await newDoctor.save();

		return NextResponse.json(
			{ message: "Doctor saved successfully." },
			{ status: 201 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Server error. Please try again later." },
			{ status: 500 }
		);
	}
}