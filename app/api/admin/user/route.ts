import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await dbConnect();

		const totalUsers = await User.countDocuments();

		return NextResponse.json({ totalUsers }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Server error. Please try again later." },
			{ status: 500 }
		);
	}
}
