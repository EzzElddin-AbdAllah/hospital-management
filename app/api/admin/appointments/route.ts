import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import Doctor from "@/models/Doctor";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		await dbConnect();
		const appointments = await Appointment.find({})
			.populate("doctor", "name clinic price")
			.populate("patient", "name");

		const formattedAppointments = appointments.map((appointment) => ({
			id: appointment._id,
			PatientName: appointment.patient.name,
			clinic: appointment.doctor.clinic,
			DoctorName: appointment.doctor.name,
			appointment: appointment.time,
			date: appointment.date,
			price: appointment.doctor.price,
		}));

		return NextResponse.json(
			{ appointments: formattedAppointments },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Server error. Please try again later." },
			{ status: 500 }
		);
	}
}
