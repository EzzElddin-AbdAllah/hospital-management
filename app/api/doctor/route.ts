import dbConnect from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest) {
	try {
		await dbConnect();
		const doctors = await Doctor.find({});
		return NextResponse.json({ doctors }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Server error. Please try again later." },
			{ status: 500 }
		);
	}
}
